import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts, { Products } from "../Hooks/useProducts";
import ProductCard from "./ProductCard";
const ProductGrid = () => {
  const { data, isLoading, error } = useProducts();
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
        <ProductCard product={product} />
       
      ))}
    </SimpleGrid>
  );
};
export default ProductGrid;

{
  /* {data.map((e) => (
  <Text>{e.title}</Text>
))}

</> */
}
