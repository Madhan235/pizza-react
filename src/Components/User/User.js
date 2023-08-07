import React from 'react'
import Base from '../Base'
import { useNavigate } from 'react-router-dom'

function User() {
    const navigate = useNavigate();
  return (
    <Base
    title={"Click buttons to navigate ⬇️ "}
    >
        <div className='container navSet' >

     <h4>New User ! ⬇️ </h4>
     <button className='btn btn-danger submitbtn'
     onClick={()=>navigate("/usersignup")}
     >Signup</button>
     <h4>Already User !⬇️ </h4>
     <button className='btn btn-danger submitbtn'
     onClick={()=>navigate("/userlogin")}
     >Login</button>    
     </div>
 
    </Base>
  )
}

export default User