import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

function SortingActions() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const changeDate = (date: Date) => {
    setFromDate(date);
  };

  return (
    <Box h='100px' mt="20px">
      <Flex   >
        <Box w='150px' h='30' />
        <Spacer />
        <Box w="150px" h="30">
          <Button colorScheme="blue">Sort By Date</Button>{" "}
        </Box>
        <Box w='150px' h='30'>
          <Button colorScheme="blue">Sort By Price</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default SortingActions;
