import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

import ResultGrid from "../ResultGrid";

import "@testing-library/jest-dom/extend-expect";
import rrender from "react-test-renderer";

describe("Snapshot tests", () => {
  test("Matches existing Snapshot", () => {
    // @ts-ignore
    const tree = rrender.create(<ResultGrid />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
