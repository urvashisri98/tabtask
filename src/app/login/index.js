import React, { useState } from 'react'
import "./style.css"
const Login = () => {
    
  const [userdata, setUserdata] = useState({
    password: "",
    phone: "",
  });
  const onhandle = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };
  const onhandleLogin = async (userdata) => {
    try {
      const response = await fetch(
        "https://canws.com/dfm-messenger/api/auth/login",
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
  };
  return (
    <div className='login'>
      <form className='login-form'>
        <h2>Login</h2>
        <label>Phone</label>
        <input type="tel" name="phone" placeholder='enter your phone' value={userdata.phone} onChange={onhandle} maxLength={10}/> 
        <label>Password</label>
        <input type="password" name="password" placeholder='enter your password' value={userdata.password} onChange={onhandle}/>
        <button type="submit" onClick={onhandleLogin} className='login-submit'>Login</button>
      </form>
    </div>
  )
}

export default Login