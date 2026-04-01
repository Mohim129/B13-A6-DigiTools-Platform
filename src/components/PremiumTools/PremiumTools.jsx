import React, {use} from 'react';

const PremiumTools = ({ toolsPromise }) => {
  
  const tools = use(toolsPromise);
  console.log(tools);
  return (
    <div className="p-30">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-gray-400">
          Choose from our curated collection of premium digital products
          designed
        </p>
        <p className="text-gray-400">
          to boost your productivity and creativity.
        </p>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  );
};

export default PremiumTools;