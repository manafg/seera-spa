import { Flex, Box, Skeleton, Grid, GridItem } from "@chakra-ui/react";
import React, { Suspense, useContext } from "react";

import { DealStateContext } from "../../Context/DealsContext";
import useDealContextInit from "../../hooks/useInitDeals";
import SearchByCity from "./components/SearchByCity";
import SearchSlidePrice from "./components/SearchSlidePrice";
import SelectDate from "./components/SelectDate";
import SortingActions from "./components/SortingActions";

const ResultGrid = React.lazy(() => import("./components/ResultGrid"));

function SearchSection() {
  const { isLoading, refetch } = useDealContextInit();
  const state = useContext(DealStateContext);
  const deals: any = state[0];

  const clearSearch = () => {
    refetch();
  };

  return (
    <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      backgroundColor='#F7F7F7'
      gap={4}
    >
      {deals.length ? (
        <>
          <GridItem rowSpan={6} colSpan={1}>
            <Box p="4" mt="100" ml="10" width="100">
              <SearchSlidePrice />
            </Box>
            <Box p="4" mt="10" ml="5" width="100">
              <SearchByCity />
            </Box>
          </GridItem>
          <GridItem mr='5px' mt='30px' colSpan={4}>
            <SelectDate />
          </GridItem>
          <GridItem colSpan={1} />
          <GridItem mr='5px' mcolSpan={1}>
            <SortingActions />
          </GridItem>
        </>
      ) : (
        <></>
      )}
      <GridItem colSpan={4}>
        {isLoading ? (
          <Skeleton height='20px' />
        ) : (
          <Suspense fallback={<Skeleton height="20px" />}>
            <ResultGrid clearSearch={clearSearch} />
          </Suspense>
        )}
      </GridItem>{" "}
    </Grid>
  );
}

export default SearchSection;
