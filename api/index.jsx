import ServerlessHttp from "serverless-http";
import app from "../app";

export default ServerlessHttp(app);