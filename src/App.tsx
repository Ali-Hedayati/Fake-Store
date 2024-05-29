import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Main from "./components/Header/Main/Main";

function App() {
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
          <GridItem bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
        </Show>

        <GridItem  area={"main"}>
          <Main />
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
