import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from '../../images/tube.svg';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login({ setAuth }) {

  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()
  const firstFocus = useRef()

  useEffect(() => {
    if (firstFocus.current) {
      firstFocus.current.focus();
    }
  }, [])

  function getUserName(event) {
    const userName = event.target.value
    console.log("username : ", userName);
    setUserName(userName)
  }

  function getUserPassword(event) {
    const getUserPassword = event.target.value
    console.log("password : ", getUserPassword);
    setPassword(getUserPassword)
  }

  const authenticateUser = async () => {
    const name = localStorage.getItem('username')
    const pass = localStorage.getItem('password')

    if (username !== name && password !== pass) {
      setMessage('please enter corret details')
    } else {

      setLoading(true)
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login',
        {
          "email": "john@mail.com",
          "password": "changeme"
        }
      )
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('refresh_token', response.data.refresh_token)
      setLoading(false)
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
          <input
            id='user'
            type="text"
            placeholder="Enter your username"
            onChange={getUserName}
            autoComplete="off"
            ref={firstFocus}
            maxLength={10}
          />
          <label for='password' className="pass-word">Password</label>
          <div className="pass-cont">
            <input
              id='password'
              placeholder="Enter your password"
              type={showPassword ? 'text' : 'password'}
              onChange={getUserPassword}
              maxLength={10}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showPassword ? " 🙈" : "👁️"} {/* Change icon dynamically */}
            </span>
          </div>
          <div className="login-cont">
            <div id="login-btn" onClick={authenticateUser}>
              {loading ? <img src={Spinner} className="spin" alt="Loading..." /> : 'Login'}
            </div>
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