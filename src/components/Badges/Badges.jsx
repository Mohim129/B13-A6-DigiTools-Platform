import React from 'react';

const Badges = () => {
    return (
      <div className=" w-full py-15 bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white text-center ">
        {/* <div className=" mx-auto md:flex justify-around text-center"> */}
        <span>
          <h1 className="text-[60px] font-bold">50K+</h1>
          <h3 className="text-[24px]">Active Users</h3>
        </span>
        <span className="text-[80px] font-[200] md:flex hidden">|</span>
        <hr className="md:hidden m-10" />
        <span>
          <h1 className="text-[60px] font-bold">200+</h1>
          <h3 className="text-[24px]">Premium Tools</h3>
        </span>
        <span className="text-[80px] font-[200] md:flex hidden">|</span>
        <hr className="md:hidden m-10" />
        <span>
          <h1 className="text-[60px] font-bold">4.9</h1>
          <h3 className="text-[24px]">Rating</h3>
        </span>
        {/* </div> */}
      </div>
    );
};

export default Badges;