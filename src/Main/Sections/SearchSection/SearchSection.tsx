import { Flex, Box, Skeleton } from "@chakra-ui/react";
import React, { Suspense, useContext } from "react";

import { DealStateContext } from "../../Context/DealsContext";
import useDealContextInit from "../../hooks/useInitDeals";
import SelectDate from "./components/SelectDate";
import SortingActions from "./components/SortingActions";
import SearchByCity from './components/SearchByCity';
import SearchSlidePrice from './components/SearchSlidePrice'

const ResultGrid = React.lazy(() => import("./components/ResultGrid"));

function SearchSection() {
  const { isLoading, refetch } = useDealContextInit();
  const state = useContext(DealStateContext);
  const deals: any = state[0];

  const clearSearch = () => {
    refetch();
  };

  return (
    <Flex bg="teal.50" justifyContent="center" padding="2">
      <Box padding='4' width='6xl'>
        {deals.length ? (
          <>
            <SelectDate />
            <SearchByCity/>
            <SortingActions />
            <SearchSlidePrice/>
          </>
        ) : (
          <></>
        )}
        {isLoading ? (
          <Skeleton height='20px' />
        ) : (
          <Suspense fallback={<Skeleton height='20px' />}>
            <ResultGrid clearSearch={clearSearch} />
          </Suspense>
        )}
      </Box>
    </Flex>
  );
}

export default SearchSection;
