import React from "react";
import "./App.css";
import { SuperComponents } from "./components/superComponents/SuperComponents";
import { NewPasswordEntering } from "./components/NewPasswordEntering";
import { PasswordRecovery } from "./components/PasswordRecovery";
import { Error404 } from "./components/Error404";

import { SignUp } from "./components/SignUp";

import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"login"} element={<Login />} />
        <Route path={"404"} element={<Error404 />} />
        <Route path={"*"} element={<Navigate to="/404" />} />
        <Route path={"signUp"} element={<SignUp />} />
        <Route path={"profile"} element={<Profile />} />
        <Route path={"PasswordRecovery"} element={<PasswordRecovery />} />
        <Route path={"NewPasswordEntering"} element={<NewPasswordEntering />} />
        <Route path={"/"} element={<SuperComponents />} />

        {/* <Route path={"/"} element={<TodolistsList demo={demo} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
