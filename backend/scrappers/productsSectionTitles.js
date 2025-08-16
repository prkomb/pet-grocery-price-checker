import puppeteer from "puppeteer";
import fs from "fs";

const MAIN_LINK = "https://www.trolley.co.uk/explore";
const MAIN_IMG_LINK = "https://www.trolley.co.uk";

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

    const currentProducts = [];

    for (const product of productsList) {
      const brand = await product.$eval(
        "a > div._info > div._brand",
        (element) => element.textContent
      );

      const description = await product.$eval(
        "a > div._info > div._desc",
        (element) => element.textContent
      );

      const price = await product.$eval(
        "a > div._info > div._price",
        (element) => element.textContent.trim().split(" ").at(0)
      );

      const image = await product.$eval("a > div._img > img", (img) =>
        img.getAttribute("src")
      );
      console.log(image);

      const results = {
        brand,
        description,
        price,
        image: `${MAIN_IMG_LINK}${image}`,
      };
      currentProducts.push(results);
    }
    categoryAndProduct.push({ title, products: currentProducts });
  }

  fs.writeFileSync("results/products.json", JSON.stringify(categoryAndProduct));

  await browser.close();
}

productsSectionTitles();
