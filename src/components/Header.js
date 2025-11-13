import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Header() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="sticky top-0">
      <div className="flex justify-between bg-black text-white pb-5 ">
        <div className="px-6 pt-3 text-2xl">Logo</div>
        <div className="px-6 pt-5 flex ">
          <span className="px-4">
            <Link to="/home">Home</Link>
          </span>
          <span className="px-4">
            <Link to="/contact">Contact</Link>
          </span>
          <span className="px-4">
            <Link to="/cart">Cart 🛒 {cart.length}</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
