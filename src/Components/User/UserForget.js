import React, { useEffect} from 'react'
import Base from '../Base';
 

function UserForget({email}) {
      
    useEffect(()=>{
        async function handleForget(){
            const user = {
              email
            }
            console.log(email)
 const res = await fetch(`https://madhan235-pizza-node.onrender.com/user/userforget`,
{method:"POST",
 body:JSON.stringify(user),
headers:{"Content-Type":"application/json"},
     })
    const result = await res.json();
    console.log(result)
    
    
              }
handleForget()
    },[email])
  return (

       
       <Base
    title={"Reset Password link has been successfully sent to your email"}
    >

    </Base>
       
       
        
   
     
  )
}

export default UserForget