import React, { useState } from 'react'
import Base from '../Base'
import { useNavigate } from 'react-router-dom';

function AdminLogin({ adminEmail,setAdminEmail,adminPassword,setAdminPassword}) {
  const [error,setError] = useState("");
  const navigate = useNavigate()
  async function handleAdminLogin(){
    const user = {
     email: adminEmail  ,
       password:adminPassword,
    }
    
    const res = await fetch(`https://madhan235-pizza-node.onrender.com/admin/login`,
    {method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type": "application/json"},
    })
    const result = await res.json();
    console.log(result)
if(result.data.error){
  setError(result.data.error)
  return
}
navigate("/adminsite");
  }
  
  return (
    <Base
    title={"Already Admin! Please Login 🙌"}
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
onClick={handleAdminLogin}
>Login</button>
<button className='btn btn-danger submitbtn'
onClick={()=>navigate("/adminforget")}
>Forget Password</button>


<div style={{color:"red"}}
        className='error'
        ><b> {error? error : ""}</b>
        </div>
    </div>
    </Base>
  )
}

export default AdminLogin