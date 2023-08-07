import { useState } from 'react';
import Base from '../Base'
import { useNavigate } from 'react-router-dom';

function UserSignup({ email,setEmail,password,setPassword}) {
  const [error,setError] = useState("");
    const navigate = useNavigate();
  async function handleSignup(){
      const user = {
        email,
        password
      }
      const res = await fetch(`https://madhan235-pizza-node.onrender.com/user/signup`,{method:"POST",
      body:JSON.stringify(user),
      headers:{"Content-Type": "application/json"},
      })
      const result = await res.json();
     console.log(result);
      if(result.data.error) {
setError(result.data.error)
return;
      }
      localStorage.setItem("token",result.data.token);
navigate("/usersite")
    }
  return (
    <Base
    title={"New user! Please Signup 🥳"}
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
onClick={handleSignup}
>Signup</button>

<div style={{color:"red"}}
        className='error'
        ><b> {error? error : ""}</b>
        </div>
    </div>
    </Base>
  )
}

export default UserSignup