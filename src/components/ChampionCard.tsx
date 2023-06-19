import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Champion } from "../hooks/useChampions";

interface Props {
  champion: Champion;
}

const ChampionCard = ({ champion }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={champion.image} />
      <CardBody>
        <Heading fontSize="2xl">{champion.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ChampionCard;
