import { createContext, useContext, useState } from "react";
import Sell from "../Sell/Sell";
import { dataCreation } from "../../App";


 
 // Ensure a default value

function Buy() {
  const{add,setAdd} = useContext(dataCreation)
  return (
    // Ensure Sell.js is wrapped within dataCreation.Provider
      <div className="home">
        <h1>Add: {add}</h1>
        <button onClick={() => setAdd(add + 1)}>add to cart</button>  
      </div>
  );
}

export default Buy;
