import { HStack, Text } from "@chakra-ui/react";

interface Props {
  tags: string[];
}

const TagsNameList = ({ tags }: Props) => {
  return (
    <HStack marginY={1}>
      {tags.map((tag) => (
        <Text key={tag} color="gray.500">
          {tag}
        </Text>
      ))}
    </HStack>
  );
};

export default TagsNameList;
