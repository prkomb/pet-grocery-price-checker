import cron from "node-cron";
import { aldiScrapper } from "./scrappers/discrounts.js";

cron.schedule("*/10 * * * *", aldiScrapper);
