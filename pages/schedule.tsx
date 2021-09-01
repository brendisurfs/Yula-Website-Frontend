// import shows from show handler api.
// could potentially do this on load or use effect.
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
// will type my show return later.
type Show = {
      Show_Dates: string;
      Show_Desc: string;
      Show_Title: string;
};

export default function SchedulePage({ events }) {
      console.log(events);

      return (
            <Layout>
                  <h1>shows go here</h1>
            </Layout>
      );
}

export const getStaticProps: GetStaticProps = async () => {
      const res = await fetch("http://localhost:1337/shows");
      const events = await res.json();
      console.log(events);

      return {
            props: { events },
      };
};
