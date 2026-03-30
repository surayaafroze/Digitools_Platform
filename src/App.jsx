

import './App.css'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import Pricing from './component/pricing_component/Pricing'
import Product from './component/Product'
import State from './component/State'


const pricingFetch= fetch('/pricing.json').then(res=>res.json())


function App() {
  

  return (
    <>
    <Navbar></Navbar> 
<Banner></Banner>
<State></State>
     

   <Product></Product> 
   <Pricing pricingFetch={pricingFetch}></Pricing>  
    </>
  )
}

export default App
