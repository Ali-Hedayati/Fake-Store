import apiClient from "../../services/api-client";
import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface Products {
  products: Product[];
}
const useProducts = () => useData<Product>("/products");

export default useProducts;
//   apiClient.get("/products").then((res) => console.log(res.data));