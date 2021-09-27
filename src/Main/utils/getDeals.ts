import SeeraApi from './seeraApi';

export async function getDeals() {
  const response = await SeeraApi("4936f61d-9b79-4e20-bb04-e0ed4d9e1a02");
  const data = await response.data;
  return data.result;
}
