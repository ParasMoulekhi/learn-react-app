import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncreament = () => {
    dispatch({ type: "INCREAMENT" });
  };
  const handleDecreament = () => {
    dispatch({ type: "DECREAMENT" });
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputValue.current.value } });
    inputValue.current.value = "";
  };

  const handleSubstract = () => {
    dispatch({ type: "SUBSTRACT", payload: { num: inputValue.current.value } });
    inputValue.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncreament}
          type="button"
          className="btn btn-primary"
        >
          +1
        </button>
        <button
          onClick={handleDecreament}
          type="button"
          className="btn btn-success"
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          placeholder="Enter number"
          type="text"
          ref={inputValue}
          className="number-input"
        />
        <button onClick={handleAdd} type="button" className="btn btn-info">
          Add
        </button>
        <button
          onClick={handleSubstract}
          type="button"
          className="btn btn-danger"
        >
          Substract
        </button>
      </div>
    </>
  );
};
export default Controls;
