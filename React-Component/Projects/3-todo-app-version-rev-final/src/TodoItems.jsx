import css from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onButtonClicked }) => {
  return (
    <>
      <div className={css["itemsContainer"]}>
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            onButtonClicked={onButtonClicked}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
