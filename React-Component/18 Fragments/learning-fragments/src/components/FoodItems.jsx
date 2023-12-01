import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClicked={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
