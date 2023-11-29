import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
