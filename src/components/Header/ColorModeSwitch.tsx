import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch size='lg'
      colorScheme="blue"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
