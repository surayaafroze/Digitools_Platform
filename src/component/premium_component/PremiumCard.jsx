import { Check } from 'lucide-react';
import React, { useState } from 'react';

const PremiumCard = ({premium,count,setCount,newCards,setNewCards}) => {
  console.log(premium)
  const{name,description,price,period,tagType,features,icon}=premium;

const [buyNow,setBuyNow]=useState(false)

const handeler=()=>{
  setBuyNow(true);
  setCount(count+1);
  setNewCards([...newCards,premium])
}
  return (



    <div>
      <div className="card w-96 bg-base-100 shadow-sm  ">
  <div className="card-body  flex flex-col flex-1">

       <div className='flex justify-end'>
         <span className={`badge badge-xs p-2.5 rounded-full font-bold flex justify-end
       ${tagType==="new"?"bg-[#FEF3C6] text-[#b29e4d]":
      tagType==="popular"?"bg-[#E1E7FF] text-[#283f9b]":
      "bg-[#DBFCE7] text-[#419a62]"}`}>{tagType}</span>
       </div>


    <div className="space-y-6">
      <img src={icon} alt="" />
      <h2 className="text-3xl font-bold">{name}</h2>
      <p>{description}</p>
      <span className="text-2xl font-bold">{price}/ <span className='font-light text-[#627382] text-xl'>{period}</span> </span>
    </div>
    
    <div>
      {features.map((feature,index)=> <div className='flex gap-1.5' key={index}>
        <Check></Check>
        <p>{feature}</p>
      </div>)}
    </div>

    <div className="mt-6">
      <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white " onClick={handeler}  >
        {buyNow?"Buy":"Buy Now"}</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default PremiumCard;