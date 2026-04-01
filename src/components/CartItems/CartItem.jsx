import React from 'react';
import { toast } from 'react-toastify';

const CartItem = ({ cartItems, item, setCartItems, setTotalItems }) => {
    const handleRemove = (id) =>{
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems)
        setTotalItems(count => count-1)
        toast.error("Removed from cart")

    }
  return (
    <div>
      <li className="list-row">
        <div>
          <img className="size-10 rounded-box" src={item.icon} />
        </div>
        <div>
          <div>{item.name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            ${item.price}
          </div>
        </div>
        <button onClick={()=>handleRemove(item.id)} className="text-error">Remove</button>
      </li>
      ;
    </div>
  );
};

export default CartItem;