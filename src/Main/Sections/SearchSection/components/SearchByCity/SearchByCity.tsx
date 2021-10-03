import { Flex, Box } from "@chakra-ui/react";
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
        <Box w='150px' h='30'>
          <Input
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
