import { Check } from 'lucide-react';
import React from 'react';

const PriceCard = ({prices}) => {
  console.log(prices)
  const {title,price,features,description,buttonText,popular}=prices;
  return (
    <div className='flex'>
      <div className={`card w-96  ${popular ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-base-100"} shadow-sm flex-1 rounded-2xl`}>
  <div className="card-body">
    {popular&& <span className="badge badge-xs badge-warning">Most Popular</span>}
    <div className='space-y-5'>
    <h2 className="text-3xl font-bold">{title}</h2>
    <p>{description}</p>
      <p className='text-3xl font-bold'>{price}<span className='text-[16px] text-[#627382] font-light'>/month</span></p>
    </div>
   
      {features.map(feature=><div className='flex gap-1.5'>
        <Check className='w-4 '></Check>
        {feature}
      </div> 
      )}
    
    <div className="mt-6">
      <button className={`btn ${popular?"bg-base-100":"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" }  btn-block rounded-full`}>{buttonText}</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default PriceCard;