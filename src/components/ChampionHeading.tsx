import { Heading } from "@chakra-ui/react";

interface Props {
  selectedTag: string | null;
}

const ChampionHeading = ({ selectedTag }: Props) => {
  const heading = `${selectedTag || ""} Champions`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default ChampionHeading;
