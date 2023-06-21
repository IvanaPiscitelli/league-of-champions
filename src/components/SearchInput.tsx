import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search champions..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
