import { HamburgerIcon } from "@chakra-ui/icons";
import {
  ChakraProvider,
  useDisclosure,
  useColorMode,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Flex,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import PageLink from "./PageLink";
const SideMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  return (
    <div className="mobile-menu">
      <ChakraProvider>
        <meta name="website" content="yula.com"></meta>
        <meta
          name="description"
          content="Website for electronic musician Yula."
        ></meta>
        {/* HEADER DISPLAY STARTS HERE */}
        <Menu>
          <MenuButton
            rounded={0}
            as={IconButton}
            aria-label="Menu Options"
            icon={<HamburgerIcon />}
            variant="normal"
          />
          <MenuList>
            <MenuItem>
              <PageLink pageRoute="/music" text="music" />
            </MenuItem>
            <MenuItem>
              <PageLink pageRoute="/about" text="about" />
            </MenuItem>
          </MenuList>
        </Menu>
      </ChakraProvider>
    </div>
  );
};

export default SideMenu;
