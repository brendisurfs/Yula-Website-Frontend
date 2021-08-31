import { NextApiRequest, NextApiResponse } from "next";
import * as shows from "./shows.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
      if (req.method === "GET") {
            res.status(200).json(shows);
      } else {
            res.setHeader("Allow", ["GET"]);
            res.status(405).send(`method ${req.method} is not allowed.`);
      }
};
