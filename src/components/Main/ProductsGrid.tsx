import { SimpleGrid } from "@chakra-ui/react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "./ProductCard";

interface Props {
  selectCategory: string | null;
}
const ProductGrid = ({ selectCategory }: Props) => {
  const { data } = useProducts(selectCategory);
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={7}
    >
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};
export default ProductGrid;
