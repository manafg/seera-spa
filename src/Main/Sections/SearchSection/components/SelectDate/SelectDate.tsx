import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
import React, {useContext, useState} from "react";

import DatePickerComp from "../../../../Components/DatePicker";
import useDealConfig from "../../../../hooks/useDealConfig";
import {DealStateContext} from "../../../../Context/DealsContext";

function SelectDate() {
  const state = useContext(DealStateContext);
  const deals: any = state[0] || [];
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
          <Button onClick={()=>searchByDateDealMap(fromDate, toDate , deals)} colorScheme='blue'>
            Search
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default SelectDate;
