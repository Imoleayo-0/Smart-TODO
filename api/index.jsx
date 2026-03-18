// import ServerlessHttp from "serverless-http";
// import app from "../app";

// export default ServerlessHttp(app);


export default function handler(req, res) {
  res.status(200).json({ message: "API working ✅" });
}