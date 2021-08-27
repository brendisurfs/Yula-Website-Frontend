import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import AdaptiveNavbar from "../components/AdaptiveNavbar";

import Logo3DSection from "../components/Logo3DSection";

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <div className="content">
        {/* <video muted autoPlay>
          <source src="YulaLogoZoom.mp4" type="video/mp4" />
        </video> */}

        <Logo3DSection />
      </div>
    </ChakraProvider>
  );
};

export default Home;
