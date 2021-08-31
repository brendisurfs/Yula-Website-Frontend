// import shows from show handler api.
// could potentially do this on load or use effect.
import { API_URL } from "@/config/index";
import { ChakraProvider } from "@chakra-ui/react";
import EventItem from "../components/EventItem";
type Show = {
      Show_Dates: string;
      Show_Desc: string;
      Show_Title: string;
};
export default function schedule({ events }) {
      return (
            <ChakraProvider>
                  <div>
                        {events.length === 0 && <h3>no events currently.</h3>}
                        {events.map((evt) => {
                              <EventItem key={evt.id}>
                                    {evt.Show_Title}
                              </EventItem>;
                        })}
                  </div>
            </ChakraProvider>
      );
}

export async function getServerSideProps() {
      const res = await fetch(`${API_URL}/api/shows`);
      const events = await res.json();
      console.log("THSI IS FRONT THE SCHEDULE PAGE");

      return {
            props: { events },
      };
}
