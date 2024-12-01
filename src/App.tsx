import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import ProductGrid from "./components/Main/ProductsGrid";

function App() {
  console.log('hi')
  const [selectCategory, setSelectCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header"
                "main"
                "footer"`,
          lg: `"header header"
              "nav main"
              "nav footer"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        gap="1"
        padding={2}
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        {/* this section will not display in movile size */}
        <Show above="lg">
          <GridItem area={"nav"}>
            <Nav
              onSelectCategory={(category) => setSelectCategory(category)}
              selectedCategory={selectCategory}
              sortOrder={sortOrder}
              onSortCategories={setSortOrder}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <ProductGrid selectCategory={selectCategory}  sortOrder={sortOrder} />
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
