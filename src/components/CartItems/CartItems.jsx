import React from "react";
import CartItem from './CartItem';

const CartItems = ({
  cartItems,
  setCartItems,
  setTotalItems,
}) => {
//   const [total, setTotal] = useState(0)
const total = cartItems.reduce((sum, item) => sum + item.price, 0);

const checkOut =()=>{
    setCartItems([])
    setTotalItems(0)
}
    
  return (
    <div className={`card p-6 shadow-2xs border border-gray-200`}>
      <h3 className="pb-2 text-2xl font-bold tracking-wide">Your Cart</h3>
      <ul className="list bg-base-100 rounded-box shadow-md md:p-6">
        {/* <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/3@94.webp"
            />
          </div>
          <div>
            <div>Sabrino Gardener</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Cappuccino
            </div>
          </div>
          <button className="text-error">Remove</button>
        </li> */}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            cartItems={cartItems}
            item={item}
            setCartItems={setCartItems}
            setTotalItems={setTotalItems}
          ></CartItem>
        ))}
      </ul>
      <div className="flex justify-between md:p-2">
        <p className="text-gray-400">Total:</p>
        <h3 className="text-2xl font-bold">${total}</h3>
      </div>
      <button onClick={()=>checkOut()} className="btn my-4 rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartItems;