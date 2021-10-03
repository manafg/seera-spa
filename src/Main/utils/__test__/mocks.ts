import { Deal } from "../../Context/DealsContext/type";

const mainInput: Deal[] = [
  {
    name: "Kempinski Hotel Mall of the Emirates",
    price: "200",
    city: "dubai",
    available_on: "2020-10-21",
  },
  {
    name: "Address Dubai Mall",
    price: "250",
    city: "dubai",
    available_on: "2020-10-15",
  },
  {
    name: "JW Marriott Marquis Hotel Dubai",
    price: "225",
    city: "dubai",
    available_on: "2020-09-21",
  },
];
const outputSortCity: Deal[] = [
  {
    name: "Address Dubai Mall",
    price: "250",
    city: "Amman",
    available_on: "2020-10-15",
  },
  {
    name: "Kempinski Hotel Mall of the Emirates",
    price: "200",
    city: "Cairo",
    available_on: "2020-10-21",
  },

  {
    name: "JW Marriott Marquis Hotel Dubai",
    price: "225",
    city: "dubai",
    available_on: "2020-09-21",
  },
];

const inputSortCity: Deal[] = [
  {
    name: "JW Marriott Marquis Hotel Dubai",
    price: "225",
    city: "dubai",
    available_on: "2020-09-21",
  },
  {
    name: "Address Dubai Mall",
    price: "250",
    city: "Amman",
    available_on: "2020-10-15",
  },
  {
    name: "Kempinski Hotel Mall of the Emirates",
    price: "200",
    city: "Cairo",
    available_on: "2020-10-21",
  },
];

const outputPriceSort: Deal[] = [
  {
    name: "Kempinski Hotel Mall of the Emirates",
    price: "200",
    city: "dubai",
    available_on: "2020-10-21",
  },

  {
    name: "JW Marriott Marquis Hotel Dubai",
    price: "225",
    city: "dubai",
    available_on: "2020-09-21",
  },
  {
    name: "Address Dubai Mall",
    price: "250",
    city: "dubai",
    available_on: "2020-10-15",
  },
];
const outputByText: Deal[] = [
    {
        name: "Kempinski Hotel Mall of the Emirates",
        price: "200",
        city: "dubai",
        available_on: "2020-10-21",
    },
];
export { inputSortCity, outputPriceSort, outputSortCity ,outputByText, mainInput};
