import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { TodoContainer } from "../Components/TodoContainer";
import Home from "../Layout/Home";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";
import "../Layout/Active.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { AuthContext } from "../context/AuthProvider";
import { ActionType } from "../Redux/action-type/actionTypes";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
// import { TodoDetails } from "../Components/TodoDetails";
const Routing = () => {
  const { user, dispatch, authReady } = useContext(AuthContext);
  // const dispatch = useDispatch();

  console.log(user);
  console.log(authReady);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ActionType.ON_AUTH_CHANGED,
        payload: user,
      });
    });
  }, []);
  return (
    <>
      {authReady && (
        <BrowserRouter>
          <div className="App">
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  path="/todo"
                  element={
                    <PrivateRoute>
                      <TodoContainer />
                    </PrivateRoute>
                  }
                />

                <Route path="login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default Routing;
const app = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  height: "100%",
  minHeight: "100vh",
};
const container = {
  width: "calc(100% - 300px)",
  flexGrow: "1",
  minHeight: "100vh",
  height: "100%",
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "300px",
  background: "orange",
};
