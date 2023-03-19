import axios from "axios";
import { baseUrl } from "./api";
import { useQuery } from "react-query";

const productsUrl = `${baseUrl}/products/categories`;

const fetchCategories = () => axios.get(productsUrl).then((res) => res.data);

export const useGetCategories = () => useQuery("categories", fetchCategories);
