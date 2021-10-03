import produce from "immer";
import moment from "moment";
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
      setState(priceDeal);
    },
    [setState],
  );

  const sortDealMap = useCallback(
    (key: string) => {
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
      const sd = moment(startDate, "DD/MM/YYYY");
      const ed = moment(endDate, "DD/MM/YYYY");

      const newArray = produce(state, draft =>
        draft?.filter((d: any) => {
          const date = new Date(d.available_on);
          const time = moment(date, "DD/MM/YYYY");
          return time.isBetween(sd, ed) || time.isSame(sd) || time.isSame(ed);
        })
      );

      setState(newArray);
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
