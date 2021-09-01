import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import AdaptiveNavbar from "../components/AdaptiveNavbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
      return (
            <ChakraProvider>
                  <Component></Component>
            </ChakraProvider>
      );
}
export default MyApp;
