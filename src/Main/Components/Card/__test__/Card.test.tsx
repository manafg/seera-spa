import React from "react";

import Card from "../Card";

import "@testing-library/jest-dom/extend-expect";
import rrender from "react-test-renderer";

describe("Snapshot tests", () => {
  test("Matches existing Snapshot", () => {
    const tree = rrender
      .create(
        <Card
          name='taName'
          price='dasdsa'
          available_on='25/10/2019'
          city='amman'
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
