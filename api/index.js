import ServerlessHttp from "serverless-http";
import app from "../backend/index.js";

export const handler = ServerlessHttp(app);
