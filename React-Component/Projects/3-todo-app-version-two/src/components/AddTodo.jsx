import style from "./AddTodo.module.css";
function AddTodo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={style.inputWidth}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            className={style.inputWidth}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className={`col-2 ${style["itemsContainer"]}`}>
          <button type="button" className="btn btn-success kg-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
