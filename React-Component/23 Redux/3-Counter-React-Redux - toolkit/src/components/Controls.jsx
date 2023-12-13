import { useRef } from "react";
import { useDispatch } from "react-redux";
import { privacyActions } from "../store/privacy";
import { counterActions } from "../store/counter";

const Controls = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncreament = () => {
    dispatch(counterActions.increament());
  };
  const handleDecreament = () => {
    dispatch(counterActions.decreament());
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.privacy_toggle());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(inputValue.current.value));

    inputValue.current.value = "";
  };

  const handleSubstract = () => {
    dispatch(counterActions.substract(inputValue.current.value));

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
