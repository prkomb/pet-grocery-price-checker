import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { get } from "./http.js";
import { parseCategory, parseProduct, exploreSlugs } from "./parse.js";

const dir = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(dir, "..", "results", "trolley");
const STATE = path.join(OUT, "state.json");

const arg = (name, def) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? Number(hit.split("=")[1]) : def;
};
const MAX_CATEGORIES = arg("max-categories", 50);
const FRESH = process.argv.includes("--fresh");

fs.mkdirSync(OUT, { recursive: true });

// state: queue of category slugs, visited slugs, categories, products
function loadState() {
  if (!FRESH && fs.existsSync(STATE)) return JSON.parse(fs.readFileSync(STATE, "utf8"));
  return { queue: [], seen: [], categories: {}, products: {} };
}

const state = loadState();
const seen = new Set(state.seen);
const queue = state.queue;

const save = () => {
  state.seen = [...seen];
  fs.writeFileSync(STATE, JSON.stringify(state));
};

function enqueue(slugs) {
  for (const s of slugs) {
    if (!seen.has(s) && !queue.includes(s)) queue.push(s);
  }
}

export async function crawl() {
  if (queue.length === 0 && seen.size === 0) {
    const home = await get("/explore/");
    if (!home) throw new Error("cannot fetch /explore/");
    enqueue(exploreSlugs(home));
  }

  let done = 0;
  while (queue.length && done < MAX_CATEGORIES) {
    const slug = queue.shift();
    seen.add(slug);

    const html = await get(`/explore/${slug}`);
    if (!html) continue;

    const { name, productPaths } = parseCategory(html);
    state.categories[slug] = { slug, name: name || slug, productIds: [] };

    for (const p of productPaths) {
      const id = p.split("/").pop();
      state.categories[slug].productIds.push(id);

      if (!state.products[id]) {
        const page = await get(p);
        if (!page) continue;
        const product = parseProduct(page, p);
        state.products[id] = product;
        // snowball: related tags on the product page become new categories
        enqueue(product.categorySlugs);
      }
    }

    done++;
    save();
    console.log(
      `[${done}] ${slug} (${state.categories[slug].productIds.length} products) ` +
        `| queue ${queue.length} | total products ${Object.keys(state.products).length}`
    );
  }

  save();
  writeOutput();
}

function writeOutput() {
  // keep only products that have at least one of Aldi/Sainsbury's/Tesco price
  const products = Object.values(state.products).filter((p) => p.prices.length);
  const byId = new Map(products.map((p) => [p.id, p]));

  const categories = Object.values(state.categories)
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      products: c.productIds
        .map((id) => byId.get(id))
        .filter(Boolean)
        .map(({ id, title, path: p, prices }) => ({ id, title, path: p, prices })),
    }))
    .filter((c) => c.products.length);

  fs.writeFileSync(path.join(OUT, "categories.json"), JSON.stringify(categories, null, 2));
  fs.writeFileSync(path.join(OUT, "products.json"), JSON.stringify(products, null, 2));
  console.log(`wrote ${categories.length} categories, ${products.length} products`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) crawl();
