import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

import DatePickerComp from "../DatePicker";

import "@testing-library/jest-dom/extend-expect";
import rrender from "react-test-renderer";

describe("Snapshot tests", () => {
  const props = {
    onChange: jest.fn(),
    selectedDatePicker: "25/10/2019",
  };

  test("Matches existing Snapshot", () => {
    // @ts-ignore
    const tree = rrender.create(<DatePickerComp {...props}/> ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
