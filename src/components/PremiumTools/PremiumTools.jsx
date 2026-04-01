import React, {use} from 'react';
import ToolCard from '../ToolCard/ToolCard';

const PremiumTools = ({ toolsPromise }) => {
  
  const tools = use(toolsPromise);
  // console.log(tools);
  
  return (
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
          <button className="btn rounded-full   bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white ">
            Products
          </button>
          <button className="btn rounded-full">
            Cart (<span></span>)
          </button>
        </div>
        <div className="container mx-auto flex">
          <ToolCard tools={tools}></ToolCard>
        </div>
      </div>
    </div>
  );
};

export default PremiumTools;