// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
};

export default function showHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  axios.get("http://localhost:1337/show");
  res.status(200).send(res);
}
