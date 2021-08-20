import { HamburgerIcon } from "@chakra-ui/icons";
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
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import PageLink from "./PageLink";
const SideMenu = () => {
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
          <Button onClick={onOpen} rounded={0}>
            Log In
          </Button>
          {/* DAY NIGHT BUTTON */}
        </div>
      </Flex>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Menu Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>
            <PageLink pageRoute="/music" text="music" />
          </MenuItem>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};

export default SideMenu;
