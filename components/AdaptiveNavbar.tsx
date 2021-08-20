import { useMediaQuery } from "@chakra-ui/react";
//CUSTOM COMPONENTS
//	|
//	v
import Header from "./Header";
import SideMenu from "./SideMenu";

const AdaptiveNavbar = () => {
  const [isMobile] = useMediaQuery("(display-mode: browser )");
  return (
    <>
      {/* standin: query screen, if screen is smaller than x size, return the SideMenu comp. if its larger than x, return Header. */}
      {isMobile ? <SideMenu /> : <Header />}
    </>
  );
};

export default AdaptiveNavbar;
