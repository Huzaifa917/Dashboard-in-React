import React, { Fragments } from "react";
import "./App.css";
import Sidebar from "./Dashboard/Sidebar";
import Admin from "./Admin/Admin";
import Home from "./components/Pages/Home";
import ListUser from "./Dashboard/ListUser";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login/Login";
function App() {
  
  return (
    <Router>
      <div className="container">
        {console.log('window.location.pathname',window.location.href)}

        {window.location.pathname !== "/login" ? <Sidebar /> : <></>}

        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/Home" element={<Home />}></Route>

          <Route path="/users" element={<ListUser />}></Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
