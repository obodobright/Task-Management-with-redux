import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { TodoContainer } from "../Components/TodoContainer";
import Home from "../Layout/Home";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";
import "../Layout/Active.css";
const Routing = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />

        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="todo" element={<TodoContainer />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
