import cron from "node-cron";
import { discounts } from "./scrappers/discounts.js";

cron.schedule("*/10 * * * *", discounts);
