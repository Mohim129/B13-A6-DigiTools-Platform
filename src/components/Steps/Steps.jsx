import React from 'react';
import User from "./../../assets/user.png";
import Package from './../../assets/package.png'
import Rocket from './../../assets/rocket.png'

const Steps = () => {
    return (
      <div className="p-30 flex flex-col gap-8 my-10">
        <div className="text-center flex flex-col gap-8">
          <h1 className="text-5xl font-bold">Get Started in 3 Steps</h1>
          <p className="text-gray-400">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="md:flex justify-around items-center gap-8">
          <div className="card shadow-2xl rounded-2xl   text-center flex gap-5 flex-col justify-center items-center pt-5 px-6 pb-22">
            <div className="w-full flex justify-end items-end">
              <div className="h-10 w-10 text-white rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] flex justify-center items-center">
                <p>01</p>
              </div>
            </div>
            <div className="h-20 w-20 rounded-full bg-linear-to-tr from-[#4F39F6]/10 to-[#9514FA]/10 flex justify-center items-center">
              <img src={User} alt="" />
            </div>

            <h3 className="text-2xl font-bold">Create Account</h3>
            <p className="text-gray-400">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="card shadow-2xl rounded-2xl   text-center flex gap-5 flex-col justify-center items-center pt-5 px-6 pb-22">
            <div className="w-full flex justify-end items-end">
              <div className="h-10 w-10 text-white rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] flex justify-center items-center">
                <p>02</p>
              </div>
            </div>
            <div className="h-20 w-20 rounded-full bg-linear-to-tr from-[#4F39F6]/10 to-[#9514FA]/10 flex justify-center items-center">
              <img src={Package} alt="" />
            </div>

            <h3 className="text-2xl font-bold">Choose Products</h3>
            <p className="text-gray-400">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="card shadow-2xl rounded-2xl   text-center flex gap-5 flex-col justify-center items-center pt-5 px-6 pb-22">
            <div className="w-full flex justify-end items-end">
              <div className="h-10 w-10 text-white rounded-full bg-linear-to-tr from-[#4F39F6] to-[#9514FA] flex justify-center items-center">
                <p>03</p>
              </div>
            </div>
            <div className="h-20 w-20 rounded-full bg-linear-to-tr from-[#4F39F6]/10 to-[#9514FA]/10 flex justify-center items-center">
              <img src={Rocket} alt="" />
            </div>

            <h3 className="text-2xl font-bold">Start Creating</h3>
            <p className="text-gray-400">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Steps;