import {Flex, Box, Text} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import _ from "lodash";
import React from "react";

import useDealConfig from "../../../../hooks/useDealConfig";

function SearchByCity() {
  const { searchByCityName } = useDealConfig();

  const debounce_fun = _.debounce(text => {
    searchByCityName(text);
  }, 1000);

  return (
    <Box>
      <Flex>
        <Box w='250px' h='30'>
            <Text fontSize='lg' mb='4'>Search by City</Text>
          <Input
            size="lg"
            focusBorderColor="red.400"
            borderColor="red.200"
            onChange={e => {
              debounce_fun(e.target.value);
            }}
            placeholder="Search By City"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default SearchByCity;
