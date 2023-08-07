import React from 'react'
import Base from '../Base'
import { useNavigate } from 'react-router-dom'

function Admin() {
    const navigate = useNavigate();
  return (
    <Base
    title={"Click buttons to navigate ⬇️ "}
    >
        <div className='container navSet' >

     <h4>New Admin ! ⬇️ </h4>
     <button className='btn btn-danger submitbtn'
     onClick={()=>navigate("/adminsignup")}
     >Signup</button>
     <h4>Already Admin !⬇️ </h4>
     <button className='btn btn-danger submitbtn'
     onClick={()=>navigate("/adminlogin")}
     >Login</button>    
     </div>
 
    </Base>
  )
}

export default Admin