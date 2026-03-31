import React from 'react';


const Carts = ({newCards}) => {
  console.log(newCards)
  const totalPrice=newCards.reduce((sum,card)=>sum+card.price,0)
 const prices=totalPrice.toFixed(1)
//  const{name,description,price,period,tagType,features,icon}=card;

  return (
    <div className='shadow p-8 rounded-2xl'>
<h2 className='text-2xl font-bold'>Your Cart</h2>

     {newCards.map(card=><div className=' flex justify-between items-center p-6 bg-[#F2F2F2] rounded-2xl mt-5'>
     <div className='flex gap-4'>
       <div>
        <img src={card.icon} alt="" />
      </div>
      <div>
        <h3 className='font-bold'>{card.name}</h3>
        <p className='font-light'>${card.price}</p>
      </div>
     </div>
      <div>
        <button className='btn text-red-500'>remove</button>
      </div>
     </div>)}

    <div className='flex justify-between p-3 pt-5'>
       <h3>total</h3>
       <p>{prices}</p>
    </div>
    <div className='pt-5'>
      <button className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white p-3'>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Carts;