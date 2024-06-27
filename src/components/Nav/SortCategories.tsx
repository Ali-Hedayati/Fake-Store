import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSortCategories: (sortOrder: string) => void;
  sortOrder: string | null;
}

const SortCategories = ({ onSortCategories, sortOrder }: Props) => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {sortOrder}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => onSortCategories("asc")} value="asc">
            Asc
          </MenuItem>
          <MenuItem onClick={() => onSortCategories("desc")} value="desc">
            Desc
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortCategories;
