import * as cheerio from "cheerio";

// Only these stores are kept. Key = Trolley store-logo class suffix.
export const STORES = {
  aldi: "Aldi",
  sainsburys: "Sainsbury's",
  tesco: "Tesco",
};

const toNumber = (text) => {
  const m = text?.replace(/,/g, "").match(/£\s*([\d.]+)/);
  return m ? Number(m[1]) : null;
};

const slugFromHref = (href) => href.split("?")[0].replace(/\/$/, "").split("/").pop();

// /explore/<slug> category page -> { name, productPaths[] }
export function parseCategory(html) {
  const $ = cheerio.load(html);
  const name = $("h1")
    .first()
    .text()
    .replace(/^Top \d+\s*/i, "")
    .replace(/\s+Products$/i, "")
    .trim();

  const productPaths = new Set();
  $("a[href^='/product/']").each((_, a) => {
    productPaths.add($(a).attr("href").split("?")[0]);
  });

  return { name, productPaths: [...productPaths] };
}

// /product/<slug>/<id> page -> product with prices for Aldi/Sainsbury's/Tesco
export function parseProduct(html, path) {
  const $ = cheerio.load(html);
  const id = path.split("/").pop();

  const title = $("title")
    .text()
    .replace(/\s*-\s*(From\s*£[\d.,]+\s*-\s*)?Trolley\.co\.uk.*$/i, "")
    .replace(/\s*-\s*Compare Prices.*$/i, "")
    .trim();

  const prices = [];
  $(".comparison-table ._item").each((_, item) => {
    const logo = $(item).find(".store-logo").first().attr("class") ?? "";
    const key = Object.keys(STORES).find((k) => logo.includes(`-${k}`));
    if (!key) return;
    const price = toNumber($(item).find("._price b").first().text());
    if (price == null) return;
    const perItemText = $(item).find("._per-item").first().text().trim();
    prices.push({
      store: key,
      price,
      unitPrice: perItemText || null,
    });
  });

  const tags = new Set();
  $("a[href^='/explore/']").each((_, a) => {
    tags.add(slugFromHref($(a).attr("href")));
  });

  return { id, path, title, prices, categorySlugs: [...tags] };
}

// Every /explore/<slug> link on a page
export function exploreSlugs(html) {
  const $ = cheerio.load(html);
  const out = new Set();
  $("a[href^='/explore/']").each((_, a) => {
    const slug = slugFromHref($(a).attr("href"));
    if (slug && slug !== "explore") out.add(slug);
  });
  return [...out];
}
