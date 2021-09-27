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

export { sortByKey };
