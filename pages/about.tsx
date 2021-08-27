import { ChakraProvider, Flex } from "@chakra-ui/react";
import TextSection from "../components/TextSection";
import _Layout from "./_Layout";

const AboutPage = () => {
  return (
    <ChakraProvider>
      <Flex backgroundColor="rgb(12,12,12)" color="ivory">
        <TextSection></TextSection>
      </Flex>
    </ChakraProvider>
  );
};

export default AboutPage;
