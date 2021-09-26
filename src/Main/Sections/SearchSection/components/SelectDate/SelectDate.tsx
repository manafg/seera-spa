import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

import DatePickerComp from "../../../../Components/DatePicker";

function SelectDate() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const changeDate = (date: Date) => {
    setFromDate(date);
  };

  return (
    <Box>
      <Flex>
        <Box w='150px' h='30'>
          <DatePickerComp onChange={changeDate} selectedDatePicker={fromDate} />
        </Box>
        <Spacer />
        <Box w='150px' h='30'>
          {" "}
          <DatePickerComp onChange={changeDate} selectedDatePicker={fromDate} />
        </Box>
        <Spacer />
        <Box w='150px' h='30'>
          <Button colorScheme='blue'>Search</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default SelectDate;
