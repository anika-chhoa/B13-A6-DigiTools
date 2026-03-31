import { toast } from "react-toastify";

const Cart = ({ cart, cartItems, setCartItems, total, setTotal}) => {
    const handleRemove=(id)=>{
        setCartItems(cartItems.filter(item=>item.id!==id));
        setTotal(total-cart.price)
        toast.warning(`${cart.name} removed from cart`)
    }
  return (
    <div className="bg-[#f9fafcFF] p-5 rounded-2xl flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <div className="w-[60px] h-[60px] border border-gray-200 rounded-full flex justify-center items-center">
          <span className="w-8 h-8 flex justify-center items-center">
            {cart.icon}
          </span>
        </div>
        <div>
            <p className="text-[#101727FF] text-xl font-semibold">{cart.name}</p>
            <p className="text-[#627382FF] font-medium">${cart.price}</p>
        </div>
      </div>
      <div>
        <button onClick={()=>handleRemove(cart.id, cart.price, cart.name)} className="text-red-600 font-bold border-none btn hover:btn-soft hover:btn-error hover:text-white">Remove</button>
      </div>
    </div>
  );
};

export default Cart;
