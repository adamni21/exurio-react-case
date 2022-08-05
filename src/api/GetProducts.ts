import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Product } from "../contexts/ProductsContext";

interface Params {
  page?: number;
  pageSize?: number;
  searchText?: string;
  complianceTypeIds?: number[];
}

interface Response {
  results: Product[];
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
}

const GetProducts = (params: Params, config?: AxiosRequestConfig) =>
  axios.post<Response, AxiosResponse<Response>, Params>(
    "https://pfp-public-productdb-api.azurewebsites.net/api/product/search",
    { page: 1 },
    config
  );

export default GetProducts;
