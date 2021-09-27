import React from "react";

import ChakraProviderContext from "./Main/Context/Chakara/Chakara";
import { DealProvider } from "./Main/Context/DealsContext/DealsContext";
import QueryContextProvider from "./Main/Context/QueryContext/QueryContextProvider";
import SearchSection from "./Main/Sections/SearchSection";

function App() {
  return (
    <QueryContextProvider>
      <ChakraProviderContext>
        <DealProvider>
          <SearchSection />
        </DealProvider>
      </ChakraProviderContext>
    </QueryContextProvider>
  );
}

export default App;
