import { useState } from "react";

//CUSTOM COMPONENTS
//	|
//	v
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

const AdaptiveNavbar = () => {
  return (
    <>
      {/* standin: query screen, if screen is smaller than x size, return the SideMenu comp. if its larger than x, return Header. */}
      {/* {isMobile ? <SideMenu /> : <Header />} */}
      {/* THIS WHOLE THING NEEDS TO BE DONE WITH CSS */}
      <HeaderMobile />
      <Header />
    </>
  );
};

export default AdaptiveNavbar;
