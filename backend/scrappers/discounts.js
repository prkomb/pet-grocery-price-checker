import puppeteer from "puppeteer";
import fs from "fs";

const url = "https://www.trolley.co.uk/deals/";

const items = [];

export async function discounts() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  const allDeals = await page.$$("#page_1 > .products-grid > .product-item");

  for (const deal of allDeals) {
    const brand = await page.evaluate(
      (el) => el.querySelector("div > a > div._info > div._brand").textContent,
      deal
    );

    const title = await page.evaluate(
      (el) => el.querySelector("div > a > div._info > div._desc").textContent,
      deal
    );

    const time = await page.evaluate(
      (el) => el.querySelector("div > div._time").textContent,
      deal
    );

    const price = await page.evaluate(
      (el) => el.querySelector("div > a > div._info > div._price").textContent,
      deal
    );

    const [, currentPrice, oldPrice, discountedFee] = price.split(" ");
    items.push({
      title,
      time,
      currentPrice,
      oldPrice,
      discountedFee: discountedFee.trimStart(),
      brand,
    });
  }

  console.log(items);
  fs.writeFileSync("server.json", JSON.stringify(items));
  await browser.close();
}
