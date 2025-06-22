const puppeteer = require("puppeteer");
const fs = require("fs");
const serveData = "./../server.json";

const url = "https://www.aldi.co.uk/products/fresh-food/k/1588161416978050";

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const aldiPage = await browser.newPage();
  await aldiPage.goto(url);

  const allProducts = await aldiPage.$$(
    "div.product-grid > div.product-teaser-item"
  );

  const items = [];

  for (product of allProducts) {
    const title = await aldiPage.evaluate(
      (product) =>
        product.querySelector(".product-tile > a > div.product-tile__name > p")
          .textContent,
      product
    );

    const price = await aldiPage.evaluate(
      (product) =>
        product.querySelector(
          ".product-tile > a > div.base-price.base-price--product-tile.product-tile__price > div > span.base-price__regular > span"
        ).textContent,
      product
    );

    const image = await aldiPage.evaluate(
      (product) =>
        product
          .querySelector(".product-tile > a > div.product-tile__picture > img")
          .getAttribute("src"),
      product
    );

    items.push({ title, price, image });
  }
  fs.writeFileSync(serveData, JSON.stringify(items, null, 2), "utf-8");
}

main();
