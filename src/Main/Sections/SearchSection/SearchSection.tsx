import {  Flex, Box } from "@chakra-ui/react";
import SelectDate from './components/SelectDate'
import SortingActions from './components/SortingActions'
import ResultGrid from './components/ResultGrid'
import React from "react";

function SearchSection() {
  return (
    <Flex
      bg='teal.50'
      justifyContent='center'
      padding="2"
    >
      <Box padding="4"  width="6xl">
        <SelectDate/>
        <SortingActions/>
        <ResultGrid/>
      </Box>
    </Flex>
  );
}

export default SearchSection;
