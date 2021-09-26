import React from "react";
import DatePicker from "react-datepicker";

import { DatePickerProps } from "./type";

import "react-datepicker/dist/react-datepicker.css";

function DatePickerComp({
  onChange,
  maxDate,
  minDate,
  disabled,
  selectedDatePicker,
}: DatePickerProps) {
  return <DatePicker onChange={onChange} selected={selectedDatePicker} />;
}

export default DatePickerComp;
