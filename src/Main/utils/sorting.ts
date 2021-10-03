import { Deal } from "../Context/DealsContext/type";

function sortByKey(array: Deal[], key: string) {
  return array.sort((a: Deal, b: Deal) => {
    // @ts-ignore
    const x = a[key];
    // @ts-ignore
    const y = b[key];

    return x < y ? -1 : x > y ? 1 : 0;
  });
}

function searchByText(array: Deal[], text: string) {
  return array.filter(obj => obj?.name.includes(text));
}

function getRangePrice(array: Deal[], price: number) {
  return array.filter(obj => parseInt(obj.price) <= price);
}

export { sortByKey, searchByText, getRangePrice };
