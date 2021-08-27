import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./YulaGLTFModel";
import { Suspense } from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

const YulaLogoModelContainer = () => {
  return (
    <ChakraProvider>
      <Flex alignSelf="center" className="container">
        <Canvas
          style={{
            height: 800,
            width: "100%",
            background: "rgba(12,12,12, 1)",
          }}
        >
          <pointLight color="yellow" position={[5, 5, 5]} />
          <rectAreaLight position={[1.3, 1, 0.8]} />
          <Model />
          <OrbitControls />
        </Canvas>
      </Flex>
    </ChakraProvider>
  );
};

export default YulaLogoModelContainer;
