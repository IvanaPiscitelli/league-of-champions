import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import fighter from "../assets/Fighter_icon.webp";
import tank from "../assets/Tank_icon.webp";
import mage from "../assets/Mage_icon.webp";
import assassin from "../assets/Assassin_icon.webp";
import marksman from "../assets/Marksman_icon.webp";
import support from "../assets/Support_icon_WR.webp";
import tags from "../data/tags";

interface Props {
  onSelectTag: (tag: string) => void;
  selectedTag: string | null;
}

const TagList = ({ onSelectTag, selectedTag }: Props) => {
  const iconTags: { [key: string]: string } = {
    fighter: fighter,
    tank: tank,
    mage: mage,
    assassin: assassin,
    marksman: marksman,
    support: support,
  };
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Tags
      </Heading>
      <List>
        {tags.map((tag) => (
          <ListItem key={tag} padding="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} objectFit="fill" src={iconTags[tag.toLowerCase()]} />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={tag === selectedTag ? "bold" : "normal"}
                onClick={() => onSelectTag(tag)}
                fontSize="lg"
                variant="link"
              >
                {tag}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TagList;
