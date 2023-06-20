import { Button, HStack, Heading, List, ListItem } from "@chakra-ui/react";
import useTags from "../hooks/useTags";

// interface Props {
//   onSelectTag: (tag: string) => void;
// }
// { onSelectTag }: Props
const TagList = () => {
  const { uniqueTags } = useTags();
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Tags
      </Heading>
      <List>
        {uniqueTags.map((tag) => (
          <ListItem key={tag} padding="5px">
            <HStack>
              <Button
                whiteSpace="normal"
                textAlign="left"
                // fontWeight={tag === selectedGenre?.id ? "bold" : "normal"}
                // onClick={() => onSelectTag(tag)}
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