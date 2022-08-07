import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiBaseUrl } from "../Constants";
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
    `${ApiBaseUrl}/product/search`,
    { ...params },
    config
  );

export default GetProducts;
