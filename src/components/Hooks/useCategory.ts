import useData from "./useData";

// export interface Categories {
//   category: [string];
// }
const useCategories = () => useData<string>("/products/categories");

export default useCategories;
