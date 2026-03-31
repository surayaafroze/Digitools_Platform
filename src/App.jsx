

import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import Premium from './component/premium_component/Premium'
import Pricing from './component/pricing_component/Pricing'
import Product from './component/Product'
import State from './component/State'


const pricingFetch= fetch('./pricing.json').then(res=>res.json());

const premiumFetch=fetch('./premium_Tools.json').then(res=>res.json());





function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar count={count}></Navbar> 
<Banner></Banner>
<State></State>
   <Premium premiumFetch={premiumFetch} setCount={setCount} count={count}></Premium>   

   <Product></Product> 
   <Pricing pricingFetch={pricingFetch}></Pricing>  
    </>
  )
}

export default App
