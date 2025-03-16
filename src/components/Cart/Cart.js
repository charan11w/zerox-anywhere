import { useContext } from "react";
import { dataCreation } from "../../App";
import image from '../../images/imageDefault.jpg'

function Cart() {

  const { removeFromCart, cart } = useContext(dataCreation)
  const totalAmount=cart.reduce((total,item) => total+item.price,0)
  const gst=totalAmount*0.1;
  const afterGst=totalAmount+gst;
  const delivary=40;
  const total=afterGst+delivary
  console.log(cart)
  return (
    <div className="cart-check">
      <div className="no-items">Items ({cart.length})</div>
      <div className="container shop-cont">
        <div className="row row-cont">
          <div className="col-7 items-det">
            <h2 className="item-title">Shopping Cart</h2>
            {cart.length === 0 ? (
              <p className="no-item">No items in the cart</p>
            ) : (
              <div className="row csName">
                {cart.map((item, index) => (
                  <div key={index} className="col-4">
                    <div className="sub-cont">
                      <div className="img-ct">
                        <img src={image} className="size-img" />
                      </div>
                      <div>Name : {item.name}</div>
                      <div>Price : {item.price}</div>
                      <div className="butn-cont">
                        <button onClick={() => removeFromCart(index)} className="rem-item">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
          <div className="col-5 total-check">
            <div className="item-check">Checkout</div>
            {cart.length && <div className="checkout-s">
              <div className="total">Total: {totalAmount}$</div>
              <div className="gst">Gst(10%): {gst}$</div>
              <div className="after-gst">After Gst: {afterGst}$</div>
              <div className="delivary-charge">Delivery Charges : {delivary}$</div>
              <div className="total-charges">Total : {total}</div>
              <div className="placeOrder">
                <button className="order-items" onClick={() => alert('Your order Placed successfully')}>
                  Place Order
                </button>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;