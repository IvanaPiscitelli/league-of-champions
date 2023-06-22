import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { IoMdMoon } from "react-icons/io";
import { BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <IoMdMoon />
      <Switch colorScheme="blue" isChecked={colorMode !== "dark"} onChange={toggleColorMode} />
      <BsSun />
    </HStack>
  );
};

export default ColorModeSwitch;
