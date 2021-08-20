import {
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextComponentType } from "next";

import React from "react";

const DayNightButton: NextComponentType = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <Button onClick={toggleColorMode}>Day/Night</Button>
    </ChakraProvider>
  );
};

export default DayNightButton;
