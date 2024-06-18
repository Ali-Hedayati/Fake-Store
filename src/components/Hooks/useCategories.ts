import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
import useData from "./useData";

type Categories = string[];
// const useCategories = () => useData<string>("/products/categories");

// const useCategories = () =>
//   apiClient.get("/products/categories").then((res) => res.data);

// const useCategories = () => {
//   console.log("im useCategories");
//   const fetchData = () => {
//     return apiClient.get("/products/categories").then((res) => res.data);
//   };
//   return useQuery<string[]>({
//     queryKey: ["categories"],
//     queryFn: () => console.log("in query"),
//   });
// };

const useCategories = () => {
  const fetchCategories = () =>
    apiClient.get("/products/categories").then((res) => res.data);

  return useQuery<string>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

export default useCategories;
