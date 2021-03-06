import React from "react";

import DatePickerComp from "../DatePicker";

import "@testing-library/jest-dom/extend-expect";
import rrender from "react-test-renderer";

describe("Snapshot tests", () => {
  const props = {
    onChange: jest.fn(),
    selectedDatePicker: new Date(),
  };

  test("Matches existing Snapshot", () => {
    // @ts-ignore
    const tree = rrender.create(<DatePickerComp {...props}/> ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
