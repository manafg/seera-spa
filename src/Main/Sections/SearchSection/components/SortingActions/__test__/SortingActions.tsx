import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

import SortingActions from "../SortingActions";

import "@testing-library/jest-dom/extend-expect";
import rrender from "react-test-renderer";

describe("Snapshot tests", () => {


    test("Matches existing Snapshot", () => {
        // @ts-ignore
        const tree = rrender.create(<SortingActions /> ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
