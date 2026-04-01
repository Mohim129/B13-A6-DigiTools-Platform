import React, { useState } from 'react';
import { Check } from 'lucide-react';
import ToolCard from './ToolCard';
import CartItems from '../CartItems/CartItems';
import { toast } from 'react-toastify';

const Card = ({
  tool,
  setTotalItems,
  totalItems,
  cartItems,
  setCartItems,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChooseTool = () => {
    setCartItems([...cartItems, tool]);
    setIsSelected(true);
    totalItems = totalItems + 1;
    setTotalItems(totalItems);
    toast.success("Added to cart");
  };


  return (
    <div
      key={tool.id}
      className=" p-6 card-body rounded-2xl max-w-96 shadow-xl border border-gray-200"
    >
      <div className="flex justify-end">
        <p className={`badge max-w-24 ${tool.badgeColor} rounded-full`}>
          {tool.badge}
        </p>
      </div>
      <img src={tool.icon} alt="" className="h-8 w-8 mb-4" />
      <h3 className="text-2xl font-bold">{tool.name}</h3>
      <p className="text-gray-400">{tool.description}</p>
      <h3 className="text-2xl font-bold">
        ${tool.price}
        <span className="text-[1rem] text-gray-400 font-normal">/Mo</span>
      </h3>
      <ul>
        {tool.features.map((feature) => (
          <li className="flex gap-4 text-gray-400 text-[1rem] mt-3">
            <Check className="text-success"></Check>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleChooseTool}
        disabled={isSelected}
        className={`btn rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white 0 ${isSelected ? "opacity-50" : ""} `}
      >
        {isSelected ? "In Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Card;