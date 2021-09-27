import { useContext, useCallback } from "react";

import { DealStateContext } from "../Context/DealsContext";
import { Deal, DealContext, DealtState } from "../Context/DealsContext/type";
import { sortByKey } from "../utils/sorting";

function useDealConfig() {
  const [state, setState] = useContext<DealContext>(DealStateContext);

  const saveDealMap = useCallback(
    (Deals: Deal[]) => {
      const parsedDeal: Deal[] = Deals;

      setState(parsedDeal);
    },
    [setState],
  );

  const sortDealMap = useCallback(
    (Deals: Deal[], key: string) => {
      const sortedDeal: Deal[] = sortByKey(Deals, key);

      setState(sortedDeal);
    },
    [setState],
  );

  const searchByDateDealMap = useCallback(
    (startDate: Date, endDate: Date, deals: Deal[]) => {
      const sd = startDate.setHours(0, 0, 0, 0);
      const ed = endDate.setHours(0, 0, 0, 0);

      // @ts-ignore
      let newArray = deals;

      newArray = newArray?.filter((d: any) => {
        const time = new Date(d.available_on).setHours(0, 0, 0, 0);

        // @ts-ignore
        return sd < time && time < ed;
      });
      const newState = newArray?.length ? newArray : deals;

      setState(newState);
    },
    [setState],
  );

  return {
    state,
    saveDealMap,
    searchByDateDealMap,
    sortDealMap,
  };
}

export default useDealConfig;
