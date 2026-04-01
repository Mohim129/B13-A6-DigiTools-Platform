import React from 'react';
import { Check } from 'lucide-react';


const ToolCard = ({tools}) => {
    console.log(tools)
  return (
    <div className='container mx-auto grid justify-center items-center gap-4 lg:grid-cols-3 sm:grid-cols-2'>
    {tools.map(tool=>{
        return (
          <div className=" p-6 card-body rounded-2xl max-w-96 shadow-xl border border-gray-200">
            <div className="flex justify-end">
              <p className="badge max-w-24 bg-primary text-white ">
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
              {tool.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-gray-400 text-[1rem] mt-3"
                >
                  <Check className="text-success"></Check>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="btn rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white ">
              Buy Now
            </button>
          </div>
        );
    })}
    </div>
  );
};

export default ToolCard;