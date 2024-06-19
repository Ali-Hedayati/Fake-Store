import useCategories from "../Hooks/useCategories";
import { List, ListItem, Button, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

const Nav = ({ onSelectCategory, selectedCategory }: Props) => {
  const { data, isLoading, error } = useCategories();
  if (error) throw error;

  if (isLoading) return <Spinner />;
  console.log("data in nav", data);
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
      {data?.map((category) => {
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
