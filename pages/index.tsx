import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import AdaptiveNavbar from "../components/AdaptiveNavbar";

import Logo3DSection from "../components/Logo3DSection";
import Layout from "../components/Layout";

const Home: NextPage = () => {
      return (
            <Layout>
                  <Logo3DSection />
            </Layout>
      );
};

export default Home;
