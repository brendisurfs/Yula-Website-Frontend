import {
  ChakraProvider,
  useDisclosure,
  Button,
  Flex,
  Heading,
  UseDisclosureProps,
  Box,
  Grid,
  GridItem,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

//CUSTOM COMPONENTS:
//	|
//	v
import PageLink from "./PageLink";
import LoginCard from "./LoginCard";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <meta name="website" content="yula.com"></meta>
      <meta
        name="description"
        content="Website for electronic musician Yula."
      ></meta>

      {/* HEADER DISPLAY STARTS HERE */}
      <div className="desktop-menu">
        <Heading
          background="rgb(12, 12, 12)"
          backgroundColor="rgb(12, 12, 12)"
          color="ivory"
          p={6}
          m={0}
          title="yula"
          justifyContent="space-between"
        >
          <Flex justifyContent="space-between">
            <Grid
              alignItems="center"
              textAlign="center"
              textTransform="uppercase"
              gridTemplateColumns="repeat(5, 1fr)"
              className="left"
              left={0}
            >
              <Link href="/">Yula</Link>
              <p>|</p>
              <PageLink pageRoute="/music" text="Music"></PageLink>
              <PageLink pageRoute="/schedule" text="Schedule"></PageLink>
              <PageLink pageRoute="/about" text="About"></PageLink>
            </Grid>
            <div className="right">
              <Button onClick={onOpen} rounded={0} variant="normal">
                Log In
              </Button>
              {/* DAY NIGHT BUTTON */}
              {/* <DayNightButton toggle={toggleColorMode} /> */}
            </div>
          </Flex>

          <Flex>{/* login card goes here */}</Flex>
        </Heading>
        <LoginCard onClose={onClose} isOpen={isOpen} />
      </div>
    </ChakraProvider>
  );
};

export default Header;
