import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ChampionGrid from "./components/ChampionGrid";
import TagList from "./components/TagList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      {/* Show component only in large screen 1024px */}
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <TagList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <ChampionGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
