import { Text } from "@chakra-ui/react";
import useChampions from "../hooks/useChampions";

const MovieGrid = () => {
  const { champions, error } = useChampions();
  if (error) return <Text>{error}</Text>;

  //entries prende un oggetto di oggetti e lo rende un array di oggetti.
  return (
    <ul>
      {Object.entries(champions).map(([key, value]) => (
        <li key={key}>{value.name}</li>
      ))}
    </ul>
  );
};

export default MovieGrid;
