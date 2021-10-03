import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

import DatePickerComp from "../../../../Components/DatePicker";
import useDealConfig from "../../../../hooks/useDealConfig";

function SelectDate() {
  const { searchByDateDealMap } = useDealConfig();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const changeFromDate = (date: Date) => {
    setFromDate(date);
  };
  const changeToDate = (date: Date) => {
    setToDate(date);
  };

  return (
    <Box>
      <Flex>
        <Box w='150px' h='30'>
          <DatePickerComp onChange={changeFromDate} selectedDatePicker={fromDate} />
        </Box>
        <Spacer />
        <Box w='150px' h='30'>
          <DatePickerComp onChange={changeToDate} selectedDatePicker={toDate} />
        </Box>
        <Spacer />
        <Box w='150px' h='30'>
          <Button leftIcon={<SearchIcon />}  onClick={()=>searchByDateDealMap(fromDate, toDate )} colorScheme='red'>
            Search
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default SelectDate;
