import { useContext } from "react";
import { dataCreation } from "../../App"; // Import context correctly

function Sell() {
  const context = useContext(dataCreation); // First, get context

  // Ensure context is defined before destructuring
  if (!context) {
    console.error("Sell component is not inside a Provider!");
    return <div>Error: Sell must be inside a Provider</div>;
  }

  const { add, setAdd, remove, setRemove } = context;

  return (
    <div className="home">
      <button onClick={() => setAdd(add- 1)}>Remove from cart</button>
      <h1>Items in the Cart: {add}</h1>
    </div>
  );
}

export default Sell;
