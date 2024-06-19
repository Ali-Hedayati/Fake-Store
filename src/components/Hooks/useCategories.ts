import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
const useCategories = () => {
  const fetchCategoriesAxios = () =>
    apiClient.get("/products/categories").then((res) => res.data);

  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategoriesAxios,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useCategories;
