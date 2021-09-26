import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { getDeals } from "../utils/getDeals";

export function useDeals() {
  // @ts-ignore
    return useQuery<Deals[], Error>("groups", getDeals);
}
