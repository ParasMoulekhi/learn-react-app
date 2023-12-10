import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <div className="App">
    //   <header>
    //     <Navbar />
    //   </header>
    //   <h1>Welcome to react router DOM sample</h1>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </div>

    <>
      <header>
        <Navbar />
        <h1>Welcome to react router DOM sample</h1>
      </header>
      <Outlet />
    </>
  );
}

export default App;
