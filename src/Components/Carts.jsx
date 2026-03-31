import cartImg from "../assets/products/shopping-cart.png";

const Carts = ({cartItems, setCartItems}) => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-6 py-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      <div className="max-w-sm mx-auto">
        <div className="w-20 h-20 mx-auto">
            <img className="w-16" src={cartImg} alt="" />
        </div>
        <p className="text-2xl font-bold text-gray-500 text-center">Your cart is empty</p>
      </div>
    </div>
  );
};

export default Carts;
