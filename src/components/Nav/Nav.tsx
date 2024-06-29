import useCategories from "../Hooks/useCategories";
import { Spinner, Box } from "@chakra-ui/react";
import CategoriesList from "./CategoriesList";
import SortCategories from "./SortCategories";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
  onSortCategories: (sortOrder: string) => void;
  sortOrder: string | null;
}

const Nav = ({
  onSelectCategory,
  selectedCategory,
  onSortCategories,
  sortOrder,
}: Props) => {
  const { data, isLoading, error } = useCategories();
  if (error) throw error;

  if (isLoading) return <Spinner />;
  return (
    <Box padding={2}>
      <CategoriesList
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
        data={data}
      />
      <Box marginY={2}>
        <SortCategories
          sortOrder={sortOrder}
          onSortCategories={onSortCategories}
        />
      </Box>
    </Box>
  );
};

export default Nav;
