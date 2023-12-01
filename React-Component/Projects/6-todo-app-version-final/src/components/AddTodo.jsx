import { useState } from "react";
import style from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={style.inputWidth}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={style.inputWidth}
            type="date"
            name="date"
            id="date"
            value={dueDate}
            onChange={handleDateChange}
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
