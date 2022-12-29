import React, { useState } from "react";
import './App.css';
import { RegistrationForm } from './components';
import { Login } from './components';
import RegistrationFrom from "./components/RegistrationFrom";


function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="gradient-bg-header flex flex-col justify-center items-center">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <RegistrationFrom onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
