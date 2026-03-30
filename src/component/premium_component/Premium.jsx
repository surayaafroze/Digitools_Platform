import React, { use } from 'react';
import PremiumCard from './PremiumCard';

const Premium = ({premiumFetch,count,setCount}) => {
  const premiumTools=use(premiumFetch);
  console.log(premiumTools)
  return (
    <div className='w-10/12 mx-auto p-5 mt-16'>
      <div className='text-center space-y-5'>
        <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
        <p className='text-[#627382] text-[16px] font-light'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>


      {/* name of each tab group should be unique */}
<div className="tabs ">
  <input type="radio" name="my_tabs_1" className="tab bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-2.5 text-white" aria-label="Tab 1" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-2.5 text-white" aria-label="Tab 2"  />
 
</div>


      <div className='grid grid-cols-3 gap-3 items-center mt-7'>
        {premiumTools.map(premium=> <PremiumCard premium={premium} setCount={setCount} count={count}></PremiumCard>   )}
      </div>


    </div>
  );
};

export default Premium;