import { Link } from "react-router-dom";
import cartLogo from '../../images/cart.png'
import { useContext } from "react";
import { dataCreation } from "../../App";

function Header() {
  const{cart}=useContext(dataCreation)
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
        <Link to='cart' className="cat">
          <div className="logo-cont">
            <img src={cartLogo} className="cart-logo" />
            <div className="cart-counter">{cart.length}</div>
          </div>
         
        </Link>
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