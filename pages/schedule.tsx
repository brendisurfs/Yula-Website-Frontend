// import shows from show handler api.
// could potentially do this on load or use effect.
import axios from "axios";
import TextSection from "../components/TextSection";
import { ScheduleHandler } from "./api/schedule_strapi";
import { useState } from "react";

type Show = {
  Show_Dates: string;
  Show_Desc: string;
  Show_Title: string;
};
