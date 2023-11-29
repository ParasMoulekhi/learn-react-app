import css from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={css["itemsContainer"]}>
        {todoItems.map((item) => (
          <TodoItem todoDate={item.dueDate} todoName={item.name} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
