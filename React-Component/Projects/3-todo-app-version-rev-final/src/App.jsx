import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Learn React",
      dueDate: "Right Now",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const itemsAdded = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(itemsAdded);
  };

  const handleDeleteButton = (itemName) => {
    const nameItemsDeleted = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(nameItemsDeleted);
    console.log(`Items has been deleted: ${itemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onItem={handleNewItem} />
      <TodoItems todoItems={todoItems} onButtonClicked={handleDeleteButton} />
    </center>
  );
}

export default App;
