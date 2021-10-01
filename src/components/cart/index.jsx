import "./style.css";
import CartItems from "../cartItems/index";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cart } = useSelector((store) => store);
  return (
    <div className="cart">
      <CartItems productsList={cart} />
    </div>
  );
};

export default Cart;
