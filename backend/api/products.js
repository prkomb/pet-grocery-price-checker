import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const router = express.Router();
const file = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "scrappers",
  "results",
  "trolley",
  "categories.json"
);

let cache = null;
function load() {
  if (cache) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    cache = [];
  }
  return cache;
}

// GET /api/trolley/categories -> [{ slug, name, count }]
router.get("/api/trolley/categories", (req, res) => {
  res.json(
    load().map(({ slug, name, products }) => ({
      slug,
      name,
      count: products.length,
    }))
  );
});

// GET /api/trolley/products?category=slug&q=text&page=1&limit=24
router.get("/api/trolley/products", (req, res) => {
  const { category, q } = req.query;
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 24));

  const byId = new Map();
  for (const c of load()) {
    if (category && c.slug !== category) continue;
    for (const p of c.products) {
      if (!byId.has(p.id)) byId.set(p.id, { ...p, category: c.name, categorySlug: c.slug });
    }
  }

  let items = [...byId.values()];
  if (q) {
    const needle = String(q).toLowerCase();
    items = items.filter((p) => p.title.toLowerCase().includes(needle));
  }

  const total = items.length;
  res.json({
    total,
    page,
    limit,
    items: items.slice((page - 1) * limit, page * limit),
  });
});

export default router;
