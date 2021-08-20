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
} from "@chakra-ui/react";
import Link from "next/link";
import PageLink from "./PageLink";
import LoginCard from "./LoginCard";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <meta name="website" content="yula.com"></meta>
      <meta
        name="description"
        content="Website for electronic musician Yula."
      ></meta>
      <Heading title="yula" justifyContent="space-between">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Box>
            <Link href="/">Yula</Link>
          </Box>
          <PageLink text="item 1" pageRoute="/"></PageLink>
          <PageLink text="item 2" pageRoute="/"></PageLink>
        </Grid>
        <Flex>
          <Button onClick={onOpen} rounded={0}>
            Log In
          </Button>
          {/* login card goes here */}
          <LoginCard onClose={onClose} isOpen={isOpen} />
        </Flex>
      </Heading>
    </ChakraProvider>
  );
};

export default Header;
