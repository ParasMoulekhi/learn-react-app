import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calcVal, setCalcVal] = useState([""]);

  const onButtonClick = (event) => {
    const printNewVal = event.target.innerText;
    if (printNewVal === "C") {
      setCalcVal("");
    } else if (printNewVal === "=") {
      const result = eval(calcVal);
      setCalcVal(result);
    } else {
      const newDisplayValue = calcVal + printNewVal;
      setCalcVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calcVal={calcVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
