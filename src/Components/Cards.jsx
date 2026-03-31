import { use } from "react";
import Card from "./card";




const Cards = ({ dataPromise, cartItems, setCartItems, total, setTotal }) => {
  const productTools = use(dataPromise);

  return (
    <div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10 mb-[120px]">
        {productTools.map((product) => (
          <Card
            key={product.id}
            product={product}
            cartItems={cartItems}
            setCartItems={setCartItems}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Cards;
