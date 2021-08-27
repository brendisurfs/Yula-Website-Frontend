import { useState } from "react";

//CUSTOM COMPONENTS
//	|
//	v
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

const AdaptiveNavbar = () => {
  return (
    <>
      <HeaderMobile />
      <Header />
    </>
  );
};

export default AdaptiveNavbar;
