import {
  inputSortCity,
  outputSortCity,
  outputPriceSort,
  mainInput,
  outputByText,
} from "./mocks";
import { searchByText, sortByKey } from "../sorting";

import "@testing-library/jest-dom/extend-expect";

describe("Test Sorting functionalities", () => {
  test("Should return array of object that contains string", () => {
    expect(searchByText(mainInput, "Kempinski")).toEqual(outputByText);
  });

  test("Should return array of object sorted according to price", () => {
    expect(sortByKey(mainInput, "price")).toEqual(outputPriceSort);
  });

  test("Should return array of object sorted according to city", () => {
    expect(sortByKey(inputSortCity, "city")).toEqual(outputSortCity);
  });
});
