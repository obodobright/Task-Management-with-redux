import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { TodoContainer } from "../Components/TodoContainer";
import Home from "../Layout/Home";
import Navbar from "../Layout/Navbar";
const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<TodoContainer />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
