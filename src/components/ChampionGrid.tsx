import { SimpleGrid, Text } from "@chakra-ui/react";
import useChampions from "../hooks/useChampions";
import ChampionCard from "./ChampionCard";
import ChampionCardSkeleton from "./ChampionCardSkeleton";
import ChampionCardContainer from "./ChampionCardContainer";

const ChampionGrid = () => {
  const { champions, error, isLoading } = useChampions();
  const skeletons = [1, 2, 3, 4, 5, 6]; // Use Array because this data don't going to change over time.

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ChampionCardContainer key={skeleton}>
            <ChampionCardSkeleton />
          </ChampionCardContainer>
        ))}
      {champions.map((champion) => (
        <ChampionCardContainer key={champion.id}>
          <ChampionCard champion={champion} />
        </ChampionCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ChampionGrid;
