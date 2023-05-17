const Card = ({cart, emptyCart}) => {
  const total = cart.reduce((acc, item)=> acc + item.price, 0)
  if (cart.length === 0) return;

  return (
    <div className="border w-72 ml-auto p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        {cart.map((item)=> 
        (
        <li className="mt-2 flex justify-between">
          <span>{item.name}</span>
          <span>{item.price}&euro;</span>
        </li>
        ))}
        
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Total:{total}&euro;</p>
      <button className="bg-red-500 text-yellow-50 w-full hover:bg-red-400 py-2 px-4 rounded mt-4" onClick={emptyCart}>
        Clear
      </button>
    </div>
  );
};

export default Card;
