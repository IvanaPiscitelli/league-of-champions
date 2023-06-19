import { Text } from "@chakra-ui/react";
import capitalizeFirst from "../utils/capitalize";

interface Props {
  title: string;
}

const ChampionTitle = ({ title }: Props) => {
  return <Text color="gray.400">{capitalizeFirst(title)}</Text>;
};

export default ChampionTitle;
