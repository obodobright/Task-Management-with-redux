import React from "react";
import styled from "styled-components";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";

export const TodoContainer = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Navbar />
      </div>
    </div>
  );
};
