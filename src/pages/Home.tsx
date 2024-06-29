import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header/Header";
import ProductGrid from "../components/Main/ProductsGrid";
import Nav from "../components/Nav/Nav";

export interface ProductQuery {
  selectCategory: string | null;
  sortOrder: string | null;
}

const Home = () => {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"
                "footer"`,
          lg: `"nav main"
              "nav footer"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        gap="1"
        padding={2}
      >
        {/* this section will not display in movile size */}
        <Show above="lg">
          <GridItem area={"nav"}>
            <Nav
              onSelectCategory={(selectCategory) =>
                setProductQuery({ ...productQuery, selectCategory })
              }
              productQuery={productQuery}
              onSortCategories={(sortOrder) =>
                setProductQuery({ ...productQuery, sortOrder })
              }
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <ProductGrid productQuery={productQuery} />
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
