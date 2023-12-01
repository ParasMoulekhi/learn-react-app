import { useState } from "react";
import style from "./AddTodo.module.css";
function AddTodo({ onItem }) {
  const [todoItem, setTodoItem] = useState();
  const [dueDate, setDueDate] = useState();

  const handleTodoItem = (event) => {
    setTodoItem(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onItem(todoItem, dueDate);
    setDueDate("");
    setTodoItem("");
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={style.inputWidth}
            type="text"
            placeholder="Enter Todo Here"
            value={todoItem}
            onChange={handleTodoItem}
          />
        </div>
        <div className="col-4">
          <input
            className={style.inputWidth}
            type="date"
            name="date"
            id="date"
            value={dueDate}
            onChange={handleDueDate}
          />
        </div>
        <div className={`col-2 ${style["itemsContainer"]}`}>
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
