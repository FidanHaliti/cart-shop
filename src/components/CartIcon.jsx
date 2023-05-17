import { AiOutlineShoppingCart } from "react-icons/ai";
const CartIcon = ({ cart }) => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-2xl" />
      {cart.length > 0 && (
        <span className="bg-red-500 text-white flex w-5 h-5 justify-center 
        items-center rounded-full absolute -top-4 -right-2 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
