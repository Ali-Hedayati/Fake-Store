import useProducts from "../../Hooks/useProducts";

const Main = () => {
  const { data, isLoading, error } = useProducts();

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export default Main;
