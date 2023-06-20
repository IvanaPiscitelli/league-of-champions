import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

// Created to avoid repetition of style

interface Props {
  children: ReactNode;
}
const ChampionCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default ChampionCardContainer;
