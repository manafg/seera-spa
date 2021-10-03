import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
import React  from "react";

import useDealConfig from "../../../../hooks/useDealConfig";

function SortingActions() {
  const { sortDealMap } = useDealConfig();

  return (
    <Box h='100px' mt="20px">
      <Flex>
        <Box w='150px' h='30' />
        <Spacer />
        <Box w="150px" h="30">
          <Button
            colorScheme='blue'
            onClick={() => sortDealMap( "price")}
          >
            Sort By Price
          </Button>
        </Box>
        <Box w='150px' h='30'>
          <Button colorScheme="blue" onClick={() => sortDealMap( "city")}>
            Sort By City
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default SortingActions;
