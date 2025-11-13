import { useEffect, useState } from "react";
import ProductCard from "../utilities/ProductCard";
export default function Home() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((result) => {
        setApiData(result.carts);
        console.log(result);
      });
  }, []);
  return (
    <div>
      <div className="flex gap-1 grid grid-cols-6 mt-10 px-4 ">
        {apiData.map((cartItem) =>
          cartItem.products.map((item) => (
            <ProductCard key={item.id} itemDetails={item} />
          ))
        )}
      </div>
    </div>
  );
}
