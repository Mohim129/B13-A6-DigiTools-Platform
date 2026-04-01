import React from 'react';
import bannerImg from "./../../assets/banner.png";
import { Play } from 'lucide-react';

const Hero = () => {
    return (
      <div className="hero bg-base-200 min-h-screen pt-6">
        <div className="hero-content flex-col lg:flex-row-reverse gap-40">
          <img src={bannerImg} className="max-w-90 rounded-lg shadow-2xl" />
          <div>
            <div className="flex badge rounded-full p-2 bg-[#E1E7FF] text-[#9514FA] mb-6">
              <div className=" w-[16px] h-[16px] p-2 rounded-full bg-[#9514FA]/20 flex justify-center items-center">
                <div className=" w-[12px] h-[12px]  p-[6px] rounded-full bg-[#9514FA]/50 flex justify-center items-center">
                  <div className=" w-[6px] h-[6px] p-[3px] rounded-full bg-[#9514FA]"></div>
                </div>
              </div>
              <p>New: AI-Powered Tools Available</p>
            </div>
            <h1 className="text-5xl font-bold">Supercharge Your</h1>
            <h1 className="text-5xl font-bold">Digital Workflow</h1>
            <div className="pt-4">
              <p className="text-gray-400">
                Access premium AI tools, design assets, templates, and
                productivity
              </p>
              <p className="text-gray-400">
                software—all in one place. Start creating faster today.
              </p>
              <p className="text-gray-400">Explore Products</p>
            </div>
            <div className="pt-8 flex gap-4">
              <button className="btn rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white">
                Explore Products
              </button>
              <button className="btn border-[#9514FA] rounded-full text-[#9514FA]">
                <Play className=""></Play> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;