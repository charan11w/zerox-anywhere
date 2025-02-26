import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import axios from "axios";

function Home() {

  const [name,setName]=useState('')
  const[size,setSize] = useState('')
  const [data,setData]=useState();


  async function showUp(){
    const url='https://api.escuelajs.co/api/v1/products/'

    const result=await axios.post(url,{
      "title": "fau",
      "price": 20,
      "description": "guvcvyv",
      "categoryId": 2,
      "images": ["https://placeimg.com/640/480/any"]
    })
    setData(result.data.description)

  }
  return (
    <div className="home">
      <div>{name}{size}</div>
      <div className="heading">Welcome to the Home</div>
      <div className="first">
        <div className="title">
          <Link to="category" >
            <div className="title-div">
              Here you can see Everything related <br />
              to Home
            </div>
          </Link>
          <ul className="list">
            <li >
              Details about Home
            </li>
            <li className="less">
              Contact Details
            </li>
            <li className="less">
              Information About Page
            </li>
            <li className="less">
              Details about Home
            </li>
          </ul>
        </div>
        <div className="details">
          <div className="log">
            Log in{data}
          </div>
          <div className="form">
            <label for="t1" className="name">Enter your Email:</label><br />
            <input type="text" className="text-name" id="t1" /><br />
            <label for="t2" className="name">Enter your Password</label><br />
            <input type="password" className="text-name" id="t2" /><br />
            
            <button className="btn" type="submit" onClick={showUp}>Login</button>
            {data}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;