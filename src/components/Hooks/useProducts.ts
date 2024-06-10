import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../../services/api-client";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const useProducts = (selectCategory: string | null) => {
  const request = selectCategory ? `/category/${selectCategory}` : "";
  // console.log("usePrdofucts: " + request);
  return useQuery<Product>({
    queryKey: ["products", selectCategory],
    queryFn: () =>
      apiClient
        .get<Product>(`/products${request}`)
        .then((res) => res.data),
  });
};
//    {
//   const request = selectCategory ? `/category/${selectCategory}` : '';
//   return useData<Product>(`/products${request}`);
// };

export default useProducts;
