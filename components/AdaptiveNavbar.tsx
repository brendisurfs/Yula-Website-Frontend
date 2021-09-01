import Head from "next/head";
import { useState } from "react";

//CUSTOM COMPONENTS
//	|
//	v
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

const AdaptiveNavbar = () => {
      return (
            <>
                  <Head>
                        <meta />
                  </Head>
                  <HeaderMobile />
                  <Header />
            </>
      );
};

export default AdaptiveNavbar;
