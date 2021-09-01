import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import AdaptiveNavbar from "./AdaptiveNavbar";
import Footer from "./Footer";
const Layout = ({ title, description, keywords, children }) => {
      return (
            <ChakraProvider>
                  <Head>
                        <link rel="favicon" href="/public/favicon.ico" />
                        <title>Yula Music</title>
                  </Head>

                  <AdaptiveNavbar />
                  {children}
                  <Footer />
            </ChakraProvider>
      );
};

Layout.defaultProps = {
      title: "Yula | The official website for electronic musician Yula.",
      description: "the center for all things Yula.",
      keywords: "music, electronic, edm, Yula, dj",
};

export default Layout;
