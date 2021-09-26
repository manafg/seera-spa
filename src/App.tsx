import React from "react";

import ChakraProviderContext from "./Main/Context/Chakara/Chakara";
import QueryContextProvider from "./Main/Context/QueryContext/QueryContextProvider";
import SearchSection from "./Main/Sections/SearchSection";

function App() {
  return (
    <QueryContextProvider>
      <ChakraProviderContext>
        <SearchSection />
      </ChakraProviderContext>
    </QueryContextProvider>
  );
}

export default App;
