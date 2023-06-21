import { SimpleGrid, Text } from "@chakra-ui/react";
import useChampions from "../hooks/useChampions";
import ChampionCard from "./ChampionCard";
import ChampionCardSkeleton from "./ChampionCardSkeleton";
import ChampionCardContainer from "./ChampionCardContainer";

interface Props {
  selectedTag: string | null;
  searchText: string | null;
}

const ChampionGrid = ({ selectedTag, searchText }: Props) => {
  const { champions, error, isLoading } = useChampions();
  const skeletons = [1, 2, 3, 4, 5, 6]; // Use Array because this data don't going to change over time.

  if (error) return <Text>{error}</Text>;
  const filteredChampions = selectedTag || searchText ? [] : champions;

  if (selectedTag) {
    champions.map((champion) => {
      if (champion.tags.indexOf(selectedTag) !== -1) {
        filteredChampions.push(champion);
      }
    });
  }
  if (searchText) {
    champions.map((champion) => {
      if (champion.name.toLowerCase().includes(searchText.toLowerCase())) {
        filteredChampions.push(champion);
      }
    });
  }
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={3}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ChampionCardContainer key={skeleton}>
            <ChampionCardSkeleton />
          </ChampionCardContainer>
        ))}
      {filteredChampions.map((champion) => (
        <ChampionCardContainer key={champion.id}>
          <ChampionCard champion={champion} />
        </ChampionCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ChampionGrid;
