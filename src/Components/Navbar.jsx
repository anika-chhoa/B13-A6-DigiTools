import React from 'react';
import cartImg from "../assets/products/shopping-cart.png"

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl text-[#4F39F6] font-bold">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#101727FF] font-semibold">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-4">
    <img src={cartImg} alt="" />
    <p className='text-[#101727FF] font-semibold'>Login</p>
    <button className="btn bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white px-4 py-3 rounded-[1000px] font-semibold border-none">Get Started</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;