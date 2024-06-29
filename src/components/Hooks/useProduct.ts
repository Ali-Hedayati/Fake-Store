import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";

const useProduct = (id: string) => {
  const fetchProduct = () =>
    apiClient.get(`/products/${id}`).then((res) => res.data);
  return useQuery({
    queryKey: ["product", id],
    queryFn: fetchProduct,
  });
};

export default useProduct;
