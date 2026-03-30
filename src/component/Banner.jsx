import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-around gap-14 p-10 w-10/12 mx-auto items-center '>
      <div className='space-y-6'>
<div className="badge badge-info bg-[#E1E7FF] border-none p-4 rounded-full">
  <img src="/assest_component/assets/Group 5.png" alt="" />
  <p className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 font-bold'>New: AI-Powered Tools Available</p>
</div>
<h1 className='text-5xl font-bold leading-16'>Supercharge Your <br />Digital Workflow</h1>
<p className='leading-8'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>
<div className='flex  gap-3'>
  <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white rounded-full'>Explore Products</button>
  <button className='btn text-transparent bg-clip-text bg-linear-to-r from-[#3928b8] to-[#36015e] font-bold rounded-full'>Watch Demo</button>
</div>
      </div>



      <div>
        <img className='h-147.5 w-125 shadow overflow-hidden rounded-xl' src="/assest_component/assets/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;