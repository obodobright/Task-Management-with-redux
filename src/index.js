import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./TodoApp/Redux/store/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./TodoApp/context/AuthProvider";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
