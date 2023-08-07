import React, { useState } from 'react'
import Base from '../Base'
import { useSelector } from 'react-redux/es/hooks/useSelector'
function Billing() {
    const [total1,setTotal1] = useState(0);
    const [total2,setTotal2] = useState(0);
    const [total3,setTotal3] = useState(0);
    const [total4,setTotal4] = useState(0);
    const [total5,setTotal5] = useState(0);

const price = useSelector((state)=>(state.options.data))
// console.log(price)
    const ordered = useSelector((state)=>(state.options.selectedData))
// console.log(ordered)
  return (
    <Base
    title={"check the bill and pay to proceed your order"}
    >
<div className='container card'>
    <div style={{color:"red"}}>
        
 <p><b>Your Crust : {ordered?.selectedCrust} , price: {price.crustData?.map((d,i)=>{
    if(d.name == ordered.selectedCrust){
        setTotal1(total1 + Number(d.price))
        return d.price
    }
 })}</b></p>
<p><b> Your Sauce : {ordered?.selectedSauce} , price:{price.sauceData?.map((d,i)=>{
if(d.name == ordered.selectedSauce){
    setTotal2(total2 + Number(d.price))

    
    return d.price
}

})}</b></p>
<p><b>Your Cheese : {ordered?.selectedCheese} , price:{price.cheeseData?.map((d,i)=>{
    if(d.name == ordered.selectedCheese){
        setTotal3(total3 + Number(d.price))

        
        return d.price
    }
})}</b></p>


<p><b>Your Veggies : {ordered?.selectedVeggies} , price:{price.veggiesData?.map((d,i)=>{
    if(d.name == ordered.selectedVeggies){
        setTotal4(total4 + Number(d.price))

       
        return d.price;
    }
})}</b> </p>
<p><b>Your Meat : {ordered?.selectedMeat} , price:{price.meatData?.map((d,i)=>{
    if(d.name == ordered.selectedMeat){
        setTotal5(total5 + Number(d.price))

        
        return d.price
    }
})}</b>  </p>
 
<p><b>Total : {total1+total2+total3+total4+total5}</b></p>
<button className='btn btn-danger submitbtn'>Pay-Now</button>  
       
    </div>
</div>

    </Base>
  )
}

export default Billing