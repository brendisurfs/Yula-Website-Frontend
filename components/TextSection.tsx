import { ChakraProvider, Flex } from "@chakra-ui/react";

const TextSection = () => {
  return (
    <ChakraProvider>
      <Flex alignContent="center" padding="2rem">
        <div>
          <p>THIS IS THE CONTENT SECTION</p>
        </div>
        ;
      </Flex>
    </ChakraProvider>
  );
};

export default TextSection;
