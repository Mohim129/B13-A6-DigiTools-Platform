import React from 'react';

import Card from './Card';


const ToolCard = ({
  tools,
  setTotalItems,
  totalItems,
  cartItems,
  setCartItems,
}) => {
  return (
    <div className="container mx-auto grid justify-center items-center gap-4 lg:grid-cols-3 sm:grid-cols-2">
      {tools.map((tool) => {
        return (
          <Card
            key={tool.id}
            tool={tool}
            setTotalItems={setTotalItems}
            totalItems={totalItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></Card>
        );
      })}
    </div>
  );
};

export default ToolCard;