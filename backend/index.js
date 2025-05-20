const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const url = "https://www.trolley.co.uk/deals/";
const baseUrl = "https://www.trolley.co.uk";
const imageUrl = "https://www.trolley.co.uk/img";
const items = [];

axios.get(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);

  $(".products-grid .product-item").each((index, element) => {
    const time = $(element).find("._time");
    const info = $(element).find("a");
    const extraInfo = $(info).find("._info");
    const price = $(extraInfo).find("._price");

    const currentPriceText = $(price).children().first().text().trim();
    const originalPriceText = $(price).children().last().text().trim();

    let convertedOriginalPrice;
    if (originalPriceText.includes("p")) {
      convertedOriginalPrice = parseInt(originalPriceText.split(" ")[1]) / 100;
      console.log(convertedOriginalPrice);
    }

    const originalPrice = originalPriceText.split(" ")[0].replace("£", "");
    const discount = originalPriceText
      .split(" ")[1]
      .replace("£", "")
      .replace("p", "");
    console.log(discount);

    const title = $(extraInfo).find("._brand");
    const description = $(extraInfo).find("._desc");

    items.push({
      time: time.text(),
      url: imageUrl + info.attr("href"),
      title: title.text(),
      description: description.text(),
      originalPrice: originalPriceText.split(" ")[0],
      discount: originalPriceText.includes("p")
        ? "£" +
          0 +
          "." +
          originalPriceText.split(" ")[1].trim().replace("p", "")
        : originalPriceText.split(" ")[1].trim(),
      discountPrice: originalPriceText.includes("p")
        ? `£${(+parseFloat(originalPrice) - +`0.${discount.trim()}`).toFixed(
            2
          )}`
        : `£${(parseFloat(originalPrice) - parseFloat(discount)).toFixed(2)}`,
    });
  });

  fs.writeFileSync("items.json", JSON.stringify(items, null, 2));
});
