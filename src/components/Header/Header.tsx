import { FcShop } from "react-icons/fc";
import ColorModeSwitch from "./ColorModeSwitch";

import { HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <HStack justify="space-between">
      <FcShop size={70} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Header;
