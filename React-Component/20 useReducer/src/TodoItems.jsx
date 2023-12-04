import css from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "./store/todo-items-store";
import { useContext } from "react";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={css["itemsContainer"]}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
