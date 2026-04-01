

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import Premium from './component/premium_component/Premium'
import Pricing from './component/pricing_component/Pricing'
import Product from './component/Product'
import State from './component/State'
import Footer from './component/Footer'
import Transform from './component/Transform'



 
const premiumFetch=fetch('/premium_Tools.json').then(res=>res.json());

const pricingFetch= fetch ('/pricing.json',{ cache: "no-store" }).then(res=>res.json());




function App() {
 const [newCards,setNewCards]=useState([]);
  
  return (
    <>
    <Navbar 
    newCards={newCards}
   setNewCards={setNewCards}
    ></Navbar> 


<Banner></Banner>
<State></State>


   <Premium 
   premiumFetch={premiumFetch} 
  
   newCards={newCards}
   setNewCards={setNewCards}
   ></Premium>   



   <Product></Product> 
   <Suspense fallback={<p>Loading...</p>}>
    <Pricing pricingFetch={pricingFetch}></Pricing>  
   </Suspense>
   <Transform></Transform>



   <Footer></Footer>
    </>
  )
}

export default App
