import puppeteer from "puppeteer";
import fs from "fs";

const MAIN_LINK = "https://www.trolley.co.uk/";
const shops = [];
export async function getShops() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(MAIN_LINK);

  const shopsList = await page.$$(".store-items > a.item");

  for (const item of shopsList) {
    const title = await item.$eval(
      ".store-logo > title",
      (element) => element.textContent
    );

    console.log({ title });
    shops.push({ title });
  }

  fs.writeFileSync("results/shops.json", JSON.stringify(shops));

  await browser.close();
}

getShops().then(() => console.log);
