import {
  ChakraProvider,
  useDisclosure,
  Button,
  Flex,
  Heading,
  UseDisclosureProps,
} from "@chakra-ui/react";
import Link from "next/link";
import PageLink from "./PageLink";
import LoginCard from "./LoginCard";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Heading title="yula" justifyContent="space-between">
        <Flex
          flexDir="row"
          justifyContent="space-around"
          m={4}
          padding={4}
          className="menu-start"
        >
          <p>
            <Link href="/">Yula</Link>
          </p>
          <PageLink pageRoute="/about" text="About"></PageLink>
          <PageLink pageRoute="/music" text="music"></PageLink>
        </Flex>
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
