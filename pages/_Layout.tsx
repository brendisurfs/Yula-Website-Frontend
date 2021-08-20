import { ChakraProvider } from "@chakra-ui/react";
import DayNightButton from "../components/DayNightButton";
import Header from "../components/Header";
const _Layout = () => {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
};

export default _Layout;
