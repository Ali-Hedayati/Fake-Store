import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../../services/api-client";
import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const useProducts = (selectCategory: string | null) => {
  const fetchProducts = (category: string | null) => {
    const request = category ? `/category/${category}` : "";
    return apiClient.get(`/products${request}`).then((res) => res.data);
  };

  return useQuery<Product[]>({
    queryKey: ["products", selectCategory],
    queryFn: () => fetchProducts(selectCategory),
  });
};

export default useProducts;

// {
//   const request = selectCategory ? `/category/${selectCategory}` : "";
//   return useData<Product>(`/products${request}`);
// }

// const request = selectCategory ? `/category/${selectCategory}` : "";
//   console.log("usePrdofucts: " + request);
//   return useQuery<Product[]>({
//     queryKey: ["products"],
//     queryFn: () =>
//       apiClient.get<Product>(`/products${request}`).then((res) => res.data),
//   });
