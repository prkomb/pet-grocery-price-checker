import puppeteer from "puppeteer";

const MAIN_LINK = "https://www.trolley.co.uk/explore";

const products = [];
const categoryAndProduct = [];

async function productsSectionTitles() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(MAIN_LINK);

  const productCategories = await page.$$("#page_1 > section");

  for (const category of productCategories) {
    const title = await category.$eval(
      "div > div.flow-items > h2",
      (element) => element.textContent
    );

    const productsList = await category.$$(
      "div > div.products-grid-cn > div > div",
      (element) => {
        element.textContent;
      }
    );

    for (const product of productsList) {
      const brand = await product.$eval(
        "a > div._info > div._brand",
        (element) => element.textContent
      );

      const description = await product.$eval(
        "a > div._info > div._desc",
        (element) => element.textContent
      );
    }
  }

  await browser.close();
}

productsSectionTitles().then(() => console.log);
