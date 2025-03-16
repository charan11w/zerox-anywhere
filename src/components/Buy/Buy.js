import { createContext, useContext, useState } from "react";
import { dataCreation } from "../../App";
import imageDef from '../../images/imageDefault.jpg'

function Buy() {
  const { addToCart, setAdded, added } = useContext(dataCreation);

  const products = [
    { name: "tomato", price: 200 },
    { name: "carrot", price: 20 },
    { name: "chilli", price: 100 },
    { name: "beetroot", price: 40 },
    { name: "cabbage", price: 50 },
    { name: "banana", price: 20 }
  ];

  const add = (v, index) => {
    addToCart(v);
    setAdded((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggling the value for the clicked item
    }));
  };

  return (
    <div>
      <h2 className="item-title">Items in our Shop</h2>
      <div className="container buy-cont">
        <div className="row buy-items">
          {products.map((v, index) => (
            <div className="col-3 items" key={index}>
              <div className="sub-cont">
                <div className="img-ct"> 
                  <img src={imageDef} className="size-img" />
                </div>
                <div>Name: {v.name}</div>
                <div>Price: {v.price}</div>
                <div className="butn-cont">
                  <button onClick={() => add(v, index)} className="add-btn">
                    {added[index] ? "Added  " : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buy;
