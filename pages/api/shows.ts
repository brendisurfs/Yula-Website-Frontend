import { NextApiRequest, NextApiResponse } from "next";
const { events } = require("./data.json");
export default (req: NextApiRequest, res: NextApiResponse) => {
      if (req.method === "GET") {
            res.status(200).json(events);
      } else {
            res.setHeader("Allow", ["GET"]);
            res.status(405).send(`method ${req.method} is not allowed.`);
      }
};
