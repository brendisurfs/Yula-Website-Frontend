import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import LoginCard from "../components/LoginCard";
import Header from "../components/Header";
import DayNightButton from "../components/DayNightButton";

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
};

export default Home;
