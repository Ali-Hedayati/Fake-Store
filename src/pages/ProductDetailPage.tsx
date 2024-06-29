import { useParams } from "react-router-dom";
import useProduct from "../components/Hooks/useProduct";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct(id!);
  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.title}</Heading>

      <Text>{data.description} </Text>
    </>
  );
};

export default ProductDetailPage;
