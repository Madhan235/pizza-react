import Base from '../Base.js'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function UserReset() {
    const[password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");
    const [error,setError] = useState("");
const {id,token} = useParams();
const [changed, setChanged] = useState(false);
    async function updatePassword(){
    const user = {
        password,
        confirm,
    }
    const res = await fetch(`https://madhan235-pizza-node.onrender.com/user/userreset/${id}/${token}`,
    {method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type": "application/json"},
    })

const result = await res.json()
console.log(result);

if(result.data.error){
      setError(result.data.error)
      return
}
setChanged(true);

}
 
    return (
    <Base
     title={"Reset your password"}
     description={"enter your email and reset your new password"}
     >
      <div className='container inputSet'>
     
      <input
      style={{border: "1px solid red"}}
      type='password'
      placeholder='Enter your new password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <input
      style={{border: "1px solid red"}}
       type='password'
       placeholder='confirm your new password'
       value={confirm}
       onChange={(e)=>setConfirm(e.target.value)}
      />

      <button className='btn btn-danger submitbtn'
      onClick={updatePassword}
      >Update</button>

<div style={{color:"red"}}
        className='error'
        >{error? error : ""}</div>

<h2 style={{color:"red"}}
        className='error'
        >{changed? "Your Password Changed Sucessfully !! , Please return to login Page": ""}</h2> 
        
     </div>
     </Base>
  )
}

export default UserReset