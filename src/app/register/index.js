import React, { useState } from "react";
import "./style.css";
const Register = () => {
  
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const onhandle = (e) => {
   
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };
  const onhandleSubmit = async (e) => {
    e.preventDefault();
    const validateError={};
  
    if(!userdata.name.trim()){
      validateError.name="Please enter name"
    }
    else if(!userdata.phone.trim()){
      validateError.phone="Please enter phone no."
    }
    else if(!userdata.email.trim()){
      validateError.email="Please enter email address"
    }
    else if(!userdata.password.trim()){
      validateError.password="Please enter password"
    }
    if(Object.keys(validateError).length===0){
      try {
        const response = await fetch(
          "https://canws.com/dfm-messenger/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata),
          }
        );
  
        if (response.ok) {
          const data = await response.json();
          return data;
  
        } else {
          const errorData = await response.json();
        }
      } catch (error) {}
    }
    else
    setValidationErrors(validateError);
  };
  return (
    <div className="registration">
      <form className="registration-form">
        <h2>Register</h2>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={userdata.name}
          onChange={onhandle}
          required
        />
        {validationErrors.name && <div className="error">{validationErrors.name}</div>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={userdata.email}
          onChange={onhandle}
          required
        />
        {validationErrors.email && <div className="error">{validationErrors.email}</div>}
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="enter your phone no."
          value={userdata.phone}
          onChange={onhandle}
          required
          maxLength={10}
        />
        {validationErrors.phone && <div className="error">{validationErrors.phone}</div>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          value={userdata.password}
          onChange={onhandle}
          rquired
        />
        {validationErrors.password && <div className="error">{validationErrors.password}</div>}
      
        <button onClick={onhandleSubmit} className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
