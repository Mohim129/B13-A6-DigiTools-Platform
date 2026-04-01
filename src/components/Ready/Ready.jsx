import { Play } from 'lucide-react';
import React from 'react';


const Ready = () => {
    return (
      <div className=" mx-auto py-30 bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white text-center ">
        <h1 className="text-[40px] font-semibold">
          Ready to Transform Your Workflow?
        </h1>

        <div className="pt-4">
          <p className="text-gray-400">
            Join thousands of professionals who are already using Digitools to
            work smarter.
          </p>
          <p className="text-gray-400">Start your free trial today.</p>
        </div>
        <div className="pt-8 flex gap-4 justify-center items-center">
          <button className="btn border-[#9514FA] rounded-full text-[#9514FA]">
            Explore Products
          </button>
          <button className="btn rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white">
            View Pricing
          </button>
        </div>
      </div>
    );
};

export default Ready;