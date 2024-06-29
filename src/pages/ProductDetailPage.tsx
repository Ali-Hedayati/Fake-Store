import { useParams } from "react-router-dom";
import useProduct from "../components/Hooks/useProduct";
import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  Image,
} from "@chakra-ui/react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct(id!);
  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1 }} spacing={5}>
        <GridItem>
          <Heading>{data.title}</Heading>
          <Text>{data.description} </Text>
        </GridItem>
        <GridItem>
          <Image src={data.image} alt={data.title} borderRadius="lg" />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default ProductDetailPage;
