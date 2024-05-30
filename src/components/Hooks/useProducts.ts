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
const useProducts = (selectCategory: string | null) => {
  const request = selectCategory ? `/category/${selectCategory}` : '';
  return useData<Product>(`/products${request}`);
};

export default useProducts;
