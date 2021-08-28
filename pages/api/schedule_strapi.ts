// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
};

const showList: any[] = [];

const URL = "http://localhost:1337/shows";

export const ScheduleHandler = async () => {
  let responseShows = await axios
    .get(URL)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
  return responseShows;
};
