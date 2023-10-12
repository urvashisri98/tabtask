import React, { useState } from "react";
import "./style.css"
import Register from "../register";
import Login from "../login";
const Home = () => {
  const [activetabregister, setActivetabregister] = useState(false);
  const [activetablogin, setActivetablogin] = useState(false);
  const onhandleTabRegister = () => {
    setActivetabregister(true);
    setActivetablogin(false);
  };
  const onhandleTabLogin = (tab) => {
    setActivetablogin(true);
    setActivetabregister(false);
  };
  
  return (
    <div className="home-container">
      <div className="home-container-button">
        <button onClick={() => onhandleTabRegister()} className="register-button">Register</button>
        <button onClick={() => onhandleTabLogin()} className="login-button">Login</button>
      </div>
        {activetabregister && <Register/>}
        {activetablogin && <Login/>}
    </div>
  );
};

export default Home;
