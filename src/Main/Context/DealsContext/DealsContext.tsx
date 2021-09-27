import React, { createContext, useState } from "react";

import {DealContextProviderProps , DealContext, DealtState} from "./type";

const DealStateContext = createContext<DealContext>([[], () => null]);

function DealProvider({ children }: DealContextProviderProps) {
  const [state, setState] = useState<DealtState>(null);

  return (
    <DealStateContext.Provider value={[state, setState]}>
      {children}
    </DealStateContext.Provider>
  );
}

export { DealProvider, DealStateContext };
