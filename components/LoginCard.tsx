// SPEC:
// CARD SHOULD BE HIDDEN UNTIL THE USER HITS THE LOGIN PAGE

import {
  ChakraProvider,
  Flex,
  Input,
  Heading,
  useColorModeValue,
  Button,
  Modal,
  useDisclosure,
  UseDisclosureReturn,
} from "@chakra-ui/react";

const LoginCard = (props: UseDisclosureReturn): JSX.Element => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
      <Button onClick={() => props.isOpen}>Open Modal</Button>
      <Flex direction="column" background={formBackground} p={12} rounded={4}>
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="brendi@yula.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Button
          mb={6}
          colorScheme="messenger"
          rounded={4}
          onClick={() => console.log("nice")}
        >
          Log In
        </Button>
      </Flex>
    </Modal>
  );
};

export default LoginCard;
