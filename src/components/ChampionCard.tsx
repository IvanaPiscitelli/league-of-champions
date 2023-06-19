import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Champion } from "../hooks/useChampions";
import TagsNameList from "./TagsNameList";
import ChampionTitle from "./ChampionTitle";

interface Props {
  champion: Champion;
}

const ChampionCard = ({ champion }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={champion.image} />
      <CardBody>
        <Heading fontSize="2xl">{champion.name}</Heading>
        <HStack justifyContent="space-between">
          <ChampionTitle title={champion.title} />
          <TagsNameList tags={champion.tags} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ChampionCard;
