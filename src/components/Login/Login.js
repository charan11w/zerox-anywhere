import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({setAuth}) {

  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()

  const navigate=useNavigate()

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

  const authenticateUser= async() => {
    const name=localStorage.getItem('username')
    const pass=localStorage.getItem('password')

    if(username !== name && password !== pass){
        setMessage('please enter corret details')
    }else{

      const response=await axios.post('https://api.escuelajs.co/api/v1/auth/login',
        {
          "email": "john@mail.com",
          "password": "changeme"
        }
      )
      localStorage.setItem('access_token',response.data.access_token)
      localStorage.setItem('refresh_token',response.data.refresh_token)
      setAuth()
      navigate('home')
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
          <button id="login-btn" onClick={authenticateUser}>Login</button>
          </div>
        </div>
        <div className="remain-cont">
        <div className="or-btn">
          OR
        </div>
        <div className="mes-div">{message}</div>
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