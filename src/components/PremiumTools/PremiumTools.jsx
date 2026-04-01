import React, {use, useState} from 'react';
import ToolCard from '../ToolCard/ToolCard';
import CartItems from '../CartItems/CartItems';

const PremiumTools = ({
  toolsPromise,
  setTotalItems,
  totalItems,
  cartItems,
  setCartItems,
}) => {
  const tools = use(toolsPromise);

  const [selectedType, setSelectedType] = useState(true);

  return (
    <div>
      
      <div className="py-30 container mx-auto grid gap-6">
        <div className="grid gap-6 text-center">
          <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
          <div>
            <p className="text-gray-400 ">
              Choose from our curated collection of premium digital products
              designed
            </p>
            <p className="text-gray-400">
              to boost your productivity and creativity.
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center my-6 gap-2">
            <button
              onClick={() => setSelectedType(!selectedType)}
              className={`btn rounded-full ${selectedType ? "bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
            >
              Products
            </button>
            <button
              onClick={() => setSelectedType(!selectedType)}
              className={`btn rounded-full ${selectedType ? "" : "bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white"}`}
            >
              Cart{" "}
              <span className={`${totalItems === 0 ? "hidden" : ""}`}>({totalItems})</span>
            </button>
          </div>
          <div
            id="tools"
            className={`container mx-auto flex ${selectedType ? "" : "hidden"} `}
          >
            {/* <div className='container mx-auto grid justify-center items-center gap-4 lg:grid-cols-3 sm:grid-cols-2'> */}
            <ToolCard
              tools={tools}
              setTotalItems={setTotalItems}
              totalItems={totalItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
            ></ToolCard>
            {/* </div> */}
          </div>
          <div
            id="cart"
            className={`container mx-auto mt-30  ${selectedType ? "hidden" : ""} `}
          >
            <div
              id="cart-is-empty"
              className={`text-center ${totalItems === 0 ? "" : "hidden"}`}
            >
              <h2 className="text-4xl font-bold mb-6">Empty Cart </h2>
              <p className="text-gray-400">
                Please Select Products to add to cart.
              </p>
            </div>

            <div
              id="cart-is-not-empty"
              className={`${totalItems === 0 ? "hidden" : ""}`}
            >
              <CartItems
                cartItems={cartItems}
                setCartItems={setCartItems}
                setTotalItems={setTotalItems}
              ></CartItems>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumTools;