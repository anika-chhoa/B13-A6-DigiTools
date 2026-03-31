
import cartImg from "../assets/products/shopping-cart.png";
import Cart from "./Cart";

const Carts = ({ cartItems, setCartItems, total, setTotal }) => {
    
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="max-w-7xl mx-auto mt-10 p-10 border border-gray-200 rounded-2xl bg-white shadow-sm">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="max-w-sm mx-auto">
            <div className="w-20 h-20 mx-auto">
              <img className="w-16" src={cartImg} alt="" />
            </div>
            <p className="text-2xl font-bold text-gray-500 text-center">
              Your cart is empty
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto mt-10 p-10 border border-gray-200 rounded-2xl bg-white shadow-sm">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="my-6 space-y-4">
            {cartItems.map((cart) => (
              <Cart
                key={cart.id}
                cart={cart}
                cartItems={cartItems}
                setCartItems={setCartItems}
                total={total}
                setTotal={setTotal}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <p className="text-[#627382FF]">Total</p>
            <p className="text-[#101727FF] text-2xl font-bold">${total}</p>
          </div>
          <button
            onClick={() => setCartItems([])}
            className="btn btn-block rounded-[100px] bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white px-4 py-3 font-bold border-none mt-6"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
