import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App bg-white">
      <Navbar> </Navbar>{" "}
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
