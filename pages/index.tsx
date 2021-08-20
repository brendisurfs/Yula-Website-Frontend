import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import LoginCard from "../components/LoginCard";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <LoginCard />
    </Box>
  );
};

export default Home;
