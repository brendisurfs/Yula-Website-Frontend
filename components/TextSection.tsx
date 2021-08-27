import { ChakraProvider, Flex } from "@chakra-ui/react";

const TextSection = () => {
  return (
    <ChakraProvider>
      <Flex
        backgroundColor="rgb(12,12,12)"
        color="ivory"
        lignContent="center"
        padding="2rem"
        height={800}
        width="100%"
      >
        <div>
          <p>CONTENT GOES HERE</p>
        </div>
      </Flex>
    </ChakraProvider>
  );
};

export default TextSection;
