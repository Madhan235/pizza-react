import React, { useEffect} from 'react'
import Base from '../Base';
 

function AdminForget({adminEmail}) {
      
    useEffect(()=>{
        async function handleForget(){
            const user = {
              email:adminEmail
            }
             
 const res = await fetch(`https://madhan235-pizza-node.onrender.com/admin/forget`,
{method:"POST",
 body:JSON.stringify(user),
headers:{"Content-Type":"application/json"},
     })
    const result = await res.json();
    console.log(result)
    
    
              }
handleForget()
    },[adminEmail])
  return (

       
       <Base
    title={"Reset Password link has been successfully sent to your email"}
    >

    </Base>
       
       
        
   
     
  )
}

export default AdminForget