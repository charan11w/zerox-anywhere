import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {

  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()
  const [loading, setLoading] = useState()
  const navigate = useNavigate()

  const getUserName = (event) => {
    const userName = event.target.value
    console.log("username : ", userName);
    setUserName(userName)
    setMessage('')
  }

  const getUserPassword = (event) => {
    const getUserPassword = event.target.value
    console.log("password : ", getUserPassword);
    setPassword(getUserPassword)
    setMessage('')
  }

  const createUser = async (event) => {
    const name = username;
    const pass = password;

    console.log(name)
    console.log(pass)
    if (!name || !pass) {
      setMessage('please enter name and password');
    } else {
      console.log('hello')
      setUserName('')
      setPassword('')
      setLoading(true)
      try {
        const response = await axios.post('https://api.escuelajs.co/api/v1/users/',
          {
            "name": `${name}`,
            "email": "nico@gmail.com",
            "password": `${pass}`,
            "avatar": "https://picsum.photos/800",
          }
        )
        localStorage.setItem('username', response.data.name)
        localStorage.setItem('password', response.data.password)
        navigate('/')
      } catch (error) {
        console.log('hi')
        console.error('api issue', error)
        setLoading(false);
        setMessage('something went wrong')
      }
    }
  }

  return (
    <div className="login-form">
      <div className="form-cont">
        <h2 className="title-f">SIGN UP</h2>
        <div className="body-form">
          <label for='user' className="user-name">Username</label>
          <input id='user'
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={getUserName}
          />
          <label for='password' className="pass-word">Password</label>
          <input
            id='password'
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={getUserPassword}
          />
        </div>
        <div className="login-cont">
            <div id="login-btn" onClick={createUser}>
              {loading ? <img src={Spinner} className="spin" alt="Loading..." /> : "Create"}
            </div>
          </div>
        <div className="remain-cont">
          <div className="or-btn">
            OR
          </div>
          <div className="mes-div">{message}</div>
          <div className="sign-q">
            Already have an account ? <span className="sign-here">
              <Link to='/'>Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SignUp;