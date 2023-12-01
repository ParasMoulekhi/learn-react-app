import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState(["Rice", "Dal", "Salad"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [newFoodItem, ...foodItems];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handlekeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
