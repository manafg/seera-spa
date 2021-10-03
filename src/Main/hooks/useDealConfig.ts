import produce from "immer";
import { useContext, useCallback } from "react";

import { DealStateContext } from "../Context/DealsContext";
import { Deal, DealContext } from "../Context/DealsContext/type";
import { sortByKey, searchByText, getRangePrice } from "../utils/sorting";

function useDealConfig() {
  const [state, setState] = useContext<DealContext>(DealStateContext);

  const saveDealMap = useCallback(
    (Deals: Deal[]) => {
      const parsedDeal: Deal[] = Deals;

      setState(parsedDeal);
    },
    [setState],
  );

  const searchByCityName = useCallback(
    (text: string) => {
      const sortedDeal = produce(state, draft =>
        // @ts-ignore
        searchByText(state, text),
      );

      setState(sortedDeal);
    },
    [setState],
  );

  const searchByPriceSlider = useCallback(
    (number: number) => {
      const priceDeal = produce(state, draft =>
        // @ts-ignore
        getRangePrice(state, number),
      );
        debugger; // eslint-disable-line no-debugger

        setState(priceDeal);
    },
    [setState],
  );

  const sortDealMap = useCallback(
    (key: string) => {
      console.log(state);
      const sortedDeal = produce(state, draft => {
        // @ts-ignore
        sortByKey(draft, key);
      });

      setState(sortedDeal);
    },
    [setState],
  );

  const searchByDateDealMap = useCallback(
    (startDate: Date, endDate: Date) => {
      const sd = startDate.setHours(0, 0, 0, 0);
      const ed = endDate.setHours(0, 0, 0, 0);

      const newArray = produce(state, draft => {
        draft?.filter((d: any) => {
          const time = new Date(d.available_on).setHours(0, 0, 0, 0);

          return false;
        });
      });

      setState([]);
    },
    [setState],
  );

  return {
    state,
    setState,
    saveDealMap,
    searchByDateDealMap,
    searchByCityName,
    sortDealMap,
      searchByPriceSlider,
  };
}

export default useDealConfig;
