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
  Container,
} from "@chakra-ui/react";
import Link from "next/link";

//CUSTOM COMPONENTS:
//	|
//	v
import PageLink from "./PageLink";
import LoginCard from "./LoginCard";
import DayNightButton from "./DayNightButton";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <meta name="website" content="yula.com"></meta>
      <meta
        name="description"
        content="Website for electronic musician Yula."
      ></meta>

      {/* HEADER DISPLAY STARTS HERE */}
      <div>
        <Heading
          color="dark"
          p={4}
          m={2}
          title="yula"
          justifyContent="space-between"
        >
          <Flex justifyContent="space-between">
            <Grid
              gridTemplateColumns="repeat(4, 1fr)"
              className="left"
              left={0}
            >
              <Link href="/">Yula</Link>
              <PageLink pageRoute="/music" text="Music"></PageLink>
              <PageLink pageRoute="/about" text="About"></PageLink>
            </Grid>
            <div className="right">
              <Button onClick={onOpen} rounded={0}>
                Log In
              </Button>
              <DayNightButton />
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
