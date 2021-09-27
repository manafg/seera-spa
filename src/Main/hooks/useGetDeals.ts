import { useQuery } from "react-query";

import { Deal } from "../Context/DealsContext/type";
import { getDeals } from "../utils/getDeals";

export function useGetDeals(config: any) {
  // @ts-ignore
  return useQuery<Deal[], Error>("getDeals", getDeals, {
    refetchOnWindowFocus: false,
    retry: false,
    ...config,
  });
}
