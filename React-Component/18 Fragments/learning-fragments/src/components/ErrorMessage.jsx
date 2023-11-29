const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>I am still hungray.😓 </h3>}</>;
};
export default ErrorMessage;
