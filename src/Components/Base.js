import React from 'react'

function Base({title,children}) {
  return (
       <div className='one'>
        <h3 className='heading'>Pizzamania.in</h3>
        <h4 style={{color:"red",margin:"0 auto"}}>{title}</h4>
        {children}  
    </div>
  )
}

export default Base