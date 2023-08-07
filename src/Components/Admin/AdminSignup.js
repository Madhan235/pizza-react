import React, { useState } from 'react'
import Base from '../Base'
import { useNavigate } from 'react-router-dom';

function AdminSignup({ adminEmail,setAdminEmail,adminPassword,setAdminPassword}) {
  const navigate = useNavigate("");
  const [error,setError] = useState("");
  async function handleAdminSignup(){

    const user = {
     email: adminEmail,
     password:adminPassword
    }
    const res = await fetch(`https://madhan235-pizza-node.onrender.com/admin/signup`,{method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type": "application/json"},
    })
    const result = await res.json();
   console.log(result);
    if(result.data.error) {
setError(result.data.error)
return;
  } 
  if(result.data.token){
    localStorage.setItem("token",result.data.token)
  navigate("/adminsite")
  }
  
}
  return (
    <Base
    title={"New Admin! Please Signup 🥳"}
    >
    <div className='container inputSet'>
        <input
        style={{border: "1px solid red"}}
        type='text'
        placeholder='email'
        value={adminEmail}
        onChange={(e)=>setAdminEmail(e.target.value)}
        />
  <input
       style={{border: "1px solid red"}}
        type='password'
        placeholder='password'
        value={adminPassword}
        onChange={(e)=>setAdminPassword(e.target.value)}
        />
<button className='btn btn-danger submitbtn'
onClick={handleAdminSignup}
>Signup</button>

<div style={{color:"red"}}
        className='error'
        ><b> {error? error : ""}</b>
        </div>
    </div>
    </Base>
  )
}


export default AdminSignup ;