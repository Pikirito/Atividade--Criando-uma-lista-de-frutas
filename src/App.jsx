import { useState } from "react";
import { FruitList } from "./components";

function App() {
  const initialValue = [
    {
      name: "Morango",
      price: 15,
      category: "Frutas",
    },
    {
      name: "Uva",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Banana",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Beterraba",
      price: 5,
      category: "Legumes",
    },
  ];

  const [fruitList, setFruitList] = useState(initialValue);

  const fruitFilter = fruitList.filter((fruit) => fruit.category === "Frutas");
  const vegetableFilter = fruitList.filter(
    (fruit) => fruit.category === "Legumes"
  );

  const total = fruitList.reduce((currentValue, fruit) => {
    return currentValue + fruit.price;
  }, 0);

  const addNewFruit = (fruit) => {
    setFruitList([...fruitList, fruit]);
  };

  return (
    <div className="App">
      <h1>
        {total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </h1>
      <FruitList fruitList={fruitList} />
      <h2>Frutas:</h2>
      <FruitList fruitList={fruitFilter} />
      <h2>Legumes:</h2>
      <FruitList fruitList={vegetableFilter} />

      <button
        onClick={() =>
          addNewFruit({ name: "maça", price: 12, category: "Frutas" })
        }
      >
        Adiconar fruta
      </button>
    </div>
  );
}

export default App;
