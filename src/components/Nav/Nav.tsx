import useCategories from "../Hooks/useCategories";
import { Spinner, Box } from "@chakra-ui/react";
import CategoriesList from "./CategoriesList";
import SortCategories from "./SortCategories";
import { ProductQuery } from "../../App";
interface Props {
  onSelectCategory: (category: string) => void;

  onSortCategories: (sortOrder: string) => void;
  productQuery: ProductQuery;
}

const Nav = ({ onSelectCategory, productQuery, onSortCategories }: Props) => {
  const selectCategory = productQuery.selectCategory;
  const sortOrder = productQuery.sortOrder;
  const { data, isLoading, error } = useCategories();
  if (error) throw error;

  if (isLoading) return <Spinner />;
  return (
    <Box padding={2}>
      <CategoriesList
        onSelectCategory={onSelectCategory}
        selectedCategory={selectCategory}
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
