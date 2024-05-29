import { FcShop } from "react-icons/fc";
import ColorModeSwitch from "./ColorModeSwitch";
import { HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack justify="space-between">
      <FcShop size={45} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Header;
