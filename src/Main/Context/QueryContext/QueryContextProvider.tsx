import React from "react";
import { QueryContextProviderProps } from "./types";

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function ChakraProviderContext({ children }: QueryContextProviderProps) {
    return  <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>;
}

export default ChakraProviderContext;
