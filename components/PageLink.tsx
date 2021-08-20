import { chakra, ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
type LinkProps = {
  text: string;
  pageRoute: string;
};

const PageLink = (props: LinkProps) => {
  return (
    <ChakraProvider>
      <Link href={props.pageRoute}>{props.text}</Link>
    </ChakraProvider>
  );
};

export default PageLink;
