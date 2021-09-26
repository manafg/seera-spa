type DatePickerProps = {
  /**
   * function that invoke once the date input value is changed
   */
  onChange: (date : Date) => void;
  /**
   * Describe the min date value
   */
  minDate?: Date;
  /**
   * Describe Selected Date
   */
  selectedDatePicker?: Date;
  /**
   * Describe the max date value
   */
  maxDate?: Date;
  /**
   * Describe if the filed is disabled
   */
  disabled?: boolean;
};

export type { DatePickerProps };
