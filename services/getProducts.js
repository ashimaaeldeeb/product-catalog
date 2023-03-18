import axios from "axios";
import { baseUrl } from "./api";
import { useQuery } from "react-query";

const productsUrl = `${baseUrl}/products`;

const fetchProducts = () => axios.get(productsUrl).then((res) => res.data);

export const useGetProducts = () => useQuery("products", fetchProducts);
