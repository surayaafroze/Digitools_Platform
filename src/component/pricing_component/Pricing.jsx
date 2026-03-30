import React, { use } from 'react';
import PriceCard from './PriceCard';

const Pricing = ({pricingFetch}) => {
  const pricingPromise=use(pricingFetch)
  console.log(pricingPromise)
  return (
    <div className='w-10/12 mx-auto p-12'>
<div className='text-center mt-4 space-y-6'>
  <h1 className='text-4xl font-bold'>
    Simple, Transparent Pricing
  </h1>
  <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
</div>
      <div className='flex justify-between gap-5 mt-7'>
        {pricingPromise.map(prices=> <PriceCard prices={prices} key={prices.id}></PriceCard>)}
      </div>
    </div>
  );
};

export default Pricing;