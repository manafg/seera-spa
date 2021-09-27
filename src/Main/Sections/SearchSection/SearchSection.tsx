import { Flex, Box, Skeleton } from "@chakra-ui/react";
import React, { Suspense } from "react";

import useDealContextInit from "../../hooks/useInitDeals";
import SelectDate from "./components/SelectDate";
import SortingActions from "./components/SortingActions";

const ResultGrid = React.lazy(() => import("./components/ResultGrid"));

function SearchSection() {
  const { isLoading } = useDealContextInit();

  return (
    <Flex bg="teal.50" justifyContent="center" padding="2">
      <Box padding='4' width='6xl'>
        <SelectDate />
        <SortingActions />
        {isLoading ? (
          <Skeleton height='20px' />
        ) : (
          <Suspense fallback={<Skeleton height='20px' />}>
            <ResultGrid />
          </Suspense>
        )}
      </Box>
    </Flex>
  );
}

export default SearchSection;
