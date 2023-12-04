import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { TodoItemsContextProvider } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
