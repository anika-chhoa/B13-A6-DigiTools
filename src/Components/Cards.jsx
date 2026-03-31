import { use } from "react";
import Card from "./card";
import GetStarted from "./GetStarted";

const fetchGetStartedData = async () => {
  const res = await fetch("/GetStartedData.json");
  return res.json();
};
const getStartedData = fetchGetStartedData();

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
      <GetStarted getStartedData={getStartedData}></GetStarted>
    </div>
  );
};

export default Cards;
