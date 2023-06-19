import { SimpleGrid, Text } from "@chakra-ui/react";
import useChampions from "../hooks/useChampions";
import ChampionCard from "./ChampionCard";

const ChampionGrid = () => {
  const { champions, error } = useChampions();
  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={10}>
      {champions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </SimpleGrid>
  );
};

export default ChampionGrid;
