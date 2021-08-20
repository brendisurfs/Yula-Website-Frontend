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
  ChakraProps,
  ChakraProviderProps,
  UseDisclosureProps,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

type props = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginCard = ({ isOpen, onClose }: props): JSX.Element => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalContent rounded={0}>
        <ModalHeader>Log In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="brendi@yula.com"
            variant="filled"
            mb={3}
            type="email"
          />

          <Input
            placeholder="password"
            variant="filled"
            mb={3}
            type="password"
          />

          <Button rounded={0} onClick={() => console.log("nice")}>
            Log In
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginCard;
