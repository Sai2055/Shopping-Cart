import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../reduxSetup/slices/Cartslice";

export default function ProductCard({ itemDetails }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart(itemDetails));
  }
  function handleRemoveItem() {
    dispatch(removeFromCart(itemDetails));
  }
  return (
    <div>
      <div className=" p-4 flex flex-col justify-center items-center bg bg-gray-100 shadow-xl">
        <div>
          <img src={itemDetails.thumbnail} alt="" className="w-[100px]" />
        </div>
        <div>
          <div>{itemDetails.title}</div>
          <div>{`₹ ${Math.floor(itemDetails.price * 87)}`}</div>
          <div>{`items left ${itemDetails.quantity}`}</div>
        </div>
        <div className="flex flex-col pt-2 gap-1">
          <button
            className="px-3 bg bg-orange-400 rounded-sm"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="px-3 bg bg-orange-400 rounded-sm"
            onClick={handleRemoveItem}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}
