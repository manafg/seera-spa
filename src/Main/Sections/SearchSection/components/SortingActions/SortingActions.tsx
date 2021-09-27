import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
import React, {useContext, useState} from "react";
import {DealStateContext} from "../../../../Context/DealsContext";
import useDealConfig from "../../../../hooks/useDealConfig";

function SortingActions() {
  const state = useContext(DealStateContext);
  const deals: any = state[0] || [];
  const { sortDealMap } = useDealConfig();
  return (
    <Box h='100px' mt="20px">
      <Flex   >
        <Box w='150px' h='30' />
        <Spacer />
        <Box w="150px" h="30">
          <Button colorScheme="blue" onClick={()=>sortDealMap(deals,'price')}>Sort By Price</Button>
        </Box>
        <Box w='150px' h='30'>
          <Button colorScheme="blue" onClick={()=>sortDealMap(deals,'city')}>Sort By City</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default SortingActions;
