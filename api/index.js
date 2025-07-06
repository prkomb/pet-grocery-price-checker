import ServerlessHttp from "serverless-http";
import app from "../backend/index";

export const handler = ServerlessHttp(app);
