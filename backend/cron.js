import cron from "node-cron";
import { discounts } from "./scrappers/discounts.js";
import { getShops } from "./scrappers/shops.js";

cron.schedule("*/10 * * * *", discounts);
cron.schedule("*/10 * * * *", getShops);
