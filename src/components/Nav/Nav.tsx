import useCategories from "../Hooks/useCategory";
import { List, ListItem, Button } from "@chakra-ui/react";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

const Nav = ({ onSelectCategory, selectedCategory }: Props) => {
  const { data } = useCategories();
  return (
    <List padding={2}>
      <ListItem>
        <Button
          fontSize={selectedCategory === "" ? "2xl" : "xl"}
          whiteSpace="normal"
          textAlign="left"
          onClick={() => onSelectCategory("")}
          fontWeight={selectedCategory === "" ? "bold" : "normal"}
          variant="link"
        >
          All
        </Button>
      </ListItem>
      {data.map((category) => {
        return (
          <ListItem key={category} padding={1}>
            <Button
              fontSize={selectedCategory === category ? "2xl" : "xl"}
              whiteSpace="normal"
              textAlign="left"
              onClick={() => onSelectCategory(category)}
              fontWeight={selectedCategory === category ? "bold" : "normal"}
              variant="link"
            >
              {category}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Nav;
