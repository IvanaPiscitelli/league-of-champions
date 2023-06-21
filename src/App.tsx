import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ChampionGrid from "./components/ChampionGrid";
import TagList from "./components/TagList";
import { useState } from "react";
import ChampionHeading from "./components/ChampionHeading";

interface ChampionQuery {
  selectedTag: string | null;
  searchText: string | null;
}

function App() {
  const [championQuery, setChampionQuery] = useState<ChampionQuery>({} as ChampionQuery);
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
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setChampionQuery({ ...championQuery, searchText })} />
      </GridItem>
      {/* Show component only in large screen 1024px */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <TagList
            onSelectTag={(tag) => setChampionQuery({ ...championQuery, selectedTag: tag })}
            selectedTag={championQuery.selectedTag}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <ChampionHeading selectedTag={championQuery.selectedTag} />
        <ChampionGrid selectedTag={championQuery.selectedTag} searchText={championQuery.searchText} />
      </GridItem>
    </Grid>
  );
}

export default App;
