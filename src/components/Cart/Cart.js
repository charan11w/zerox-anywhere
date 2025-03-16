import { useContext } from "react";
import { dataCreation } from "../../App";

function Cart() {

  const { removeFromCart, cart } = useContext(dataCreation)
  console.log(cart)
  return (
    <div className="cart-check">
      <div className="no-items">Items ({cart.length})</div>
      <div className="row row-cont">
        <div className="col-7 items-det">
          <h2 className="item-title">Shopping Cart</h2>
          {cart.length === 0 ?
            <p>No items in the cart</p> :
            (
              <ul>
                {
                  cart.map((item, index) => (
                    <li key={index} className="revi">
                      <span>{item.name} - {item.price}</span>
                      <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>
        <div className="col-5 item-check">
          checkout
        </div>
      </div>
    </div>
  )
}

export default Cart;