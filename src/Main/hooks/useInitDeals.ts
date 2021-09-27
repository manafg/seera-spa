import { Deal } from "../Context/DealsContext/type";
import useDealConfig from "./useDealConfig";
import { useGetDeals } from "./useGetDeals";

function useDealContextInit() {
  const { saveDealMap } = useDealConfig();

  const onSuccess = (data: Deal[]) => {

    const deal = data;

    saveDealMap(deal);
  };

  const { isLoading } = useGetDeals({ onSuccess });

  return { isLoading };
}

export default useDealContextInit;
