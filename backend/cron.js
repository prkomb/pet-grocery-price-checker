import cron from "node-cron";
import { discounts } from "./scrappers/discrounts.js";

cron.schedule("*/10 * * * *", discounts);
