import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SuperComponents } from './components/superComponents/SuperComponents';
import { NewPasswordEntering } from './components/NewPasswordEntering';
import { PasswordRecovery } from './components/PasswordRecovery';
import { Error404 } from './components/Error404';
import { Profile } from './components/Profile';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <SignUp/>
      <Profile/>
      <Error404/>
      <PasswordRecovery/>
      <NewPasswordEntering/>
      <SuperComponents/>


    </div>
  );
}

export default App;
