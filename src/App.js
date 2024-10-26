import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import MyProfile from "./Components/MyProfile/MyProfile";
import { createContext, useState } from "react";

export const CurrentUserContext = createContext("currentUser");
function App() {
  const [currentUserDetails, setCurrentUserDetails] = useState();
  return (
    <CurrentUserContext.Provider
      value={[currentUserDetails, setCurrentUserDetails]}
    >
      <div className="App bg-slate-700 text-white">
        <Navbar> </Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="signin" element={<Login></Login>}></Route>
          <Route path="signup" element={<Signup></Signup>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
