import { Link } from "react-router-dom";

function Header() {
  const logo = 'https://e1.pngegg.com/pngimages/681/624/png-clipart-naruto-logos-naruto-anime-logo-thumbnail.png'
  return (
    <div className="app">
      <ul className="head-ul">
        <Link to='home' className="cat">
          <li className="head-li"> Home</li>
        </Link>
        <Link to="category" className="cat">
          <li className="head-li">Category</li>
        </Link>
        <Link to='activity' className="cat">
          <li className="head-li">Activity</li>
        </Link>
        <Link to='buy' className="cat">
          <li className="head-li">Buy</li>
        </Link>
        <Link to='sell' className="cat">
          <li className="head-li">Sell</li>
        </Link>
      </ul>
      <div className="cart">
        <Link to='support' className="cat">
          <button className="bt">
            Support
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;