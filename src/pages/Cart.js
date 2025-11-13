import { useSelector } from "react-redux";
import ProductCard from "../utilities/ProductCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <p>Total cart : {cart.length}</p>
      {cart.map((cart) => (
        <div key={cart.id}>{<ProductCard itemDetails={cart} />}</div>
      ))}
    </div>
  );
}
