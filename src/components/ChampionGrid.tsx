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
  const filteredChampions = champions.filter((champion) => {
    if (selectedTag && searchText) {
      return champion.tags.includes(selectedTag) && champion.name.toLowerCase().includes(searchText.toLowerCase());
    } else if (selectedTag) {
      return champion.tags.includes(selectedTag);
    } else if (searchText) {
      return champion.name.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return true;
    }
  });
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="20px" spacing="18px">
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
