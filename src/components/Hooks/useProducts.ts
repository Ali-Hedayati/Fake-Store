import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
import { ProductQuery } from "../../App";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const useProducts = (productQuery: ProductQuery) => {
  const sortOrder = productQuery.sortOrder;
  const selectCategory = productQuery.selectCategory;

  
  console.log("sort is :", sortOrder);
  const fetchProducts = (category: string | null, sortOrder: string | null) => {
    const request = category ? `/category/${category}` : "";
    return apiClient
      .get(`/products${request}`, { params: { sort: sortOrder } })
      .then((res) => res.data);
  };

  return useQuery<Product[]>({
    queryKey: ["products", selectCategory, sortOrder],
    queryFn: () => fetchProducts(selectCategory, sortOrder),
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
