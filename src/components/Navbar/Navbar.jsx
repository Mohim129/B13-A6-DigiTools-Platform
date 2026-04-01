import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({ totalItems, setSelectedType }) => {
  return (
    <div className="navbar fixed z-10 bg-base-100 shadow-sm  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold bg-linear-to-tr from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4 ">
        <span className="relative">
          <div
            className={`absolute -right-3 -top-2 bg-error text-white rounded-full flex justify-end items-center h-4 w-4 p-1 ${totalItems > 0 ? "" : "hidden"} `}
          >
            <p>{totalItems}</p>
          </div>
          <ShoppingCart onClick={()=>setSelectedType(false)}></ShoppingCart>
        </span>

        <p>Login</p>
        <a className="btn bg-linear-to-tr from-[#4F39F6] to-[#9514FA] text-white rounded-full">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;