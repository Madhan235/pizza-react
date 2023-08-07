import React, { useState } from 'react'
import Base from '../Base'
import { useNavigate } from 'react-router-dom';

function UserLogin({ email,setEmail,password,setPassword}) {
  const [error,setError] = useState("");
  const navigate = useNavigate()
  async function handleLogin(){
    const user = {
      email,
      password,
    }
    
    const res = await fetch(`https://madhan235-pizza-node.onrender.com/user/login`,
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
// localStorage.setItem("token",result.data.token);
// console.log(result.data.token);
navigate("/usersite");
  }
  
  return (
    <Base
    title={"Already user! Please Login 🙌"}
    >
    <div className='container inputSet'>
        <input
        style={{border: "1px solid red"}}
        type='text'
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
  <input
       style={{border: "1px solid red"}}
        type='password'
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
<button className='btn btn-danger submitbtn'
onClick={handleLogin}
>Login</button>
<button className='btn btn-danger submitbtn'
onClick={()=>navigate("/userforget")}
>Forget Password</button>

<div style={{color:"red"}}
        className='error'
        ><b> {error? error : ""}</b>
        </div>
  
    </div>
    
    </Base>
  )
}

export default UserLogin