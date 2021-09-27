import axios from "axios";

const SeeraApi = axios.create({
  baseURL: "https://www.mocky.io/v3/",
  timeout: 3000,
  headers: {
    Accept: "application/json;charset=UTF-8",
    dataType: "json",
    "Content-Type": "json",
  },
});

export default SeeraApi;
