export const FruitList = ({ fruitList }) => {
  return (
    <ul>
      {fruitList.map((fruit, index) => (
        <li key={index}>
          <h3>{fruit.name}</h3>
          <span>
            {fruit.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span>{fruit.category}</span>
        </li>
      ))}
    </ul>
  );
};
