
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";

// const useCategories = () => useData<string>("/products/categories");

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      apiClient.get("/products/categories").then((res) => res.data),
  });
};

export default useCategories;
