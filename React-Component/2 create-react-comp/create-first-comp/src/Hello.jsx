function Hello() {
  let myName = "Paras";
  let fullName = () => {
    return "Paras Moulekhi";
  };
  return (
    <h3>Hello this is the future speaking. I am your master {fullName()}</h3>
  );
}

export default Hello;
