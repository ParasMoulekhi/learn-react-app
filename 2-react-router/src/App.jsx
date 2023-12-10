import React from "react";
import About from "./About";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default App;
