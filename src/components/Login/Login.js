import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()

  function getUserName(event){
    const userName=event.target.value
    console.log("username : ",userName);
    setUserName(userName)
  }

  function getUserPassword(event){
    const getUserPassword=event.target.value
    console.log("password : ", getUserPassword);
    setPassword(getUserPassword)
  }

  const authorizeUser= () => {
    const name=localStorage.getItem('username')
    const pass=localStorage.getItem('password')

    if(username === name && password === pass){

    }
  }

  return (
    <div className="login-form">
      <div className="form-cont">
        <h2 className="title-f">SIGN IN</h2>
        <div className="body-form">
          <label for='user' className="user-name">Username</label>
          <input id='user' type="text" placeholder="Enter your username" onChange={getUserName}/>
          <label for='password' className="pass-word">Password</label>
          <input id='password' placeholder="Enter your password" type="password" onChange={getUserPassword}/>
          <div className="login-cont">
          <button id="login-btn">Login</button>
          </div>
        </div>
        <div className="remain-cont">
        <div className="or-btn">
          OR
        </div>
        <div>{message}</div>
        <div className="sign-q">
          Don't have an account ? <span className="sign-here">
          <Link to={'signup'}>Sign up</Link></span>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Login;