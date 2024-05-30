import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  VStack,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Product } from "../Hooks/useProducts";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image src={product.image} alt={product.title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <VStack>
          <Text color="blue.600" fontSize="2xl">
            ${product.price}
          </Text>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
