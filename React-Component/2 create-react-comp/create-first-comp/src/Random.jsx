function Random() {
  let number = Math.trunc(Math.random() * 10 + 1);
  return (
    <h1 style={{ "background-color": "#776691" }}>
      Random number is : {number}
    </h1>
  );
}
export default Random;
