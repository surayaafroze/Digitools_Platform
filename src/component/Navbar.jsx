import React from 'react';

const Navbar = ({count}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-around">
  <div className=' '>
    <img src="/assest_component/DigiTools.png" alt="" />
  </div>
<div>
  
  <ul className='flex justify-between gap-8 font-bold '>
    <li><a href="/home">Products</a></li>
    <li><a href="/Features">Features</a></li>
    <li><a href="/Pricing">Pricing</a></li>
    <li><a href="/Testimonials">Testimonials</a></li>
    <li><a href="/FAQ">FAQ</a></li>
  </ul>
</div>
  <div className="flex justify-between items-center gap-3">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
       {count>0 && <span className="badge badge-sm indicator-item text-red-600 font-bold ">{count}</span>}

        </div>
      
    <button className='btn rounded-xl'>Login</button>
    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-2.5 text-white w-30.5'>Get started</button>

  </div>
  
</div>
  );
};

export default Navbar;