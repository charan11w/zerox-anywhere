function Home() {
  return (
    <div className="home">
      <div className="heading">Welcome to the Home</div>
      <div className="first">
        <div className="title">
          <div className="title-div">
            Here you can see Everything related <br />
            to Home
          </div>
          <ul className="list">
            <li className="less">
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
            Log in
          </div>
          <div className="form">
            <label for="t1" className="name">Enter your Email:</label><br />
            <input type="text" className="text-name" id="t1" /><br />
            <label for="t2" className="name">Enter your Password</label><br />
            <input type="password" className="text-name" id="t2" /><br />
            <button className="btn" type="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;