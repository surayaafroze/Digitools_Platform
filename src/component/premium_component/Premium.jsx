import React, { use, useState } from 'react';
import PremiumCard from './PremiumCard';
import Carts from '../cart_component/Carts';

const Premium = ({premiumFetch,count,setCount}) => {
  const premiumTools=use(premiumFetch);
  console.log(premiumTools)

const [colorChange,setColorChange]=useState("Products")

// carts er jonoo
const [newCards,setNewCards]=useState([]);

  return (
    <div className='w-10/12 mx-auto p-5 mt-16'>
      <div className='text-center space-y-5'>
        <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
        <p className='text-[#627382] text-[16px] font-light'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>


      {/* name of each tab group should be unique */}

  
 

 {/* name of each tab group should be unique */}
<div className="flex justify-center gap-1 mt-9">
 
 
 <button 
 onClick={()=>setColorChange("Products")}
 className={`w-40 p-3 rounded-full shadow ${colorChange==="Products"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white":"bg-base-100"}`}       
 >Products</button>


 <button onClick={()=>setColorChange("Cart")}
 className={`w-40 p-3 rounded-full shadow ${colorChange==="Cart"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white":"bg-base-100"}`}>Cart({count})</button>
  
</div>



    {colorChange==="Products"? <div className='grid grid-cols-3 gap-3 items-center mt-7'>
      {premiumTools.map(premium=> <PremiumCard 
      key={premium.id}
        premium={premium} 
        setCount={setCount} 
        count={count}
        newCards={newCards}
        setNewCards={setNewCards}
        >
        </PremiumCard>   )}
    </div> : <Carts newCards={newCards}></Carts>}


    </div>
  );
};

export default Premium;