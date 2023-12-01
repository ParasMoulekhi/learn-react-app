import styles from "./Display.module.css";
const Display = ({ calcVal }) => {
  return (
    <input className={styles.display} type="text" value={calcVal} readOnly />
  );
};
export default Display;
