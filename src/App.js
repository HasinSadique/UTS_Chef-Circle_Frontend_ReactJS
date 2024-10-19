import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App bg-white">
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="signin" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
