import ServerlessHttp from "serverless-http";
import app from "../backend/api/index.js";

export const handler = ServerlessHttp(app);
