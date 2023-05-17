import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Card from "./components/Card";

function App() {
  const [cart, setCart] = useState([]);
  const emptyCart =()=>{
    setCart([])
  }
  return (
    <div className="p-8">
      <Header cart={cart}/>
      <Products cart={cart} setCart={setCart} />
      <Card cart={cart} emptyCart={emptyCart} />
    </div>
  );
}

export default App;
