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
import SideMenu from "./SideMenu";
const HeaderMobile = () => {
  return (
    <Flex m={4} justifyContent="space-between">
      <Grid
        alignItems="center"
        textAlign="center"
        textTransform="uppercase"
        gridTemplateColumns="repeat(5, 1fr)"
        className="left"
        left={0}
      >
        <Link href="/">Yula</Link>
      </Grid>
      <div className="right">
        <SideMenu />
      </div>
    </Flex>
  );
};

export default HeaderMobile;
