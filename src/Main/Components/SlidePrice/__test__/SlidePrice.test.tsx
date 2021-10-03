import React from "react";

import SlidePrice from "../SlidePrice";

import "@testing-library/jest-dom/extend-expect";
import rrender from "react-test-renderer";

describe("Snapshot tests", () => {
  test("Matches existing Snapshot", () => {
    const tree = rrender.create(<SlidePrice onChange={jest.fn()} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
