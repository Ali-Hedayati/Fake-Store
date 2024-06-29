import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "./ProductCard";

interface Props {
  selectCategory: string | null;
  sortOrder: string | null;
}
const ProductGrid = ({ selectCategory, sortOrder }: Props) => {
  const { data, error, isLoading } = useProducts(selectCategory, sortOrder);
  if (error) throw error;

  if (isLoading) return <Spinner />;

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
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};
export default ProductGrid;
