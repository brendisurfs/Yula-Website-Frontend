import {
  Button,
  ChakraProvider,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextComponentType } from "next";

import React from "react";

const DayNightButton: NextComponentType = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <IconButton
        aria-label="day night switch"
        icon={<MoonIcon />}
        onClick={toggleColorMode}
      >
        Day/Night
      </IconButton>
    </ChakraProvider>
  );
};

export default DayNightButton;
