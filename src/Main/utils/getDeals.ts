export function getDeals() {
  fetch("http://www.mocky.io/v2/5eb8fcb12d0000d088357f2a").then(res =>
    res.json()
  );
}
