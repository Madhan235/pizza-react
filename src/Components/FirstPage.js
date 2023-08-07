import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
 

function  FirstPage() {
  const selectData = useSelector((state)=>state.options)
  console.log(selectData);
  const navigate = useNavigate();
  return (
    <div className='one'>
        <h3 className='heading'>Pizzamania.in</h3>
        <img className='one-img' 
        src='https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/1-plus-1-san-francisco-style.3d7c4e23cc5a55733a7b6b6bb3e233a4.1.jpg' 
        alt='pizza offer'/>
        <div className='firstButton'>
       <button className='btn btn-danger'
       onClick={()=>navigate("/admin")}
       >Admin</button>
       <button className='btn btn-danger'
       onClick={()=>navigate("/user")}
       >User</button>
       </div>

        </div>
  )
}

export default FirstPage