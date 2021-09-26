import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { ChakaraProviderProps } from "./types";

function ChakraProviderContext({ children }: ChakaraProviderProps) {
  return <ChakraProvider> {children}</ChakraProvider>;
}

export default ChakraProviderContext;
