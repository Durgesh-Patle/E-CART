import React from 'react'
import { useParams } from 'react-router-dom'

const Carts = () => {
   let {id}= useParams();
   console.log(id);
   
  return (
    <div>
      
    </div>
  )
}

export default Carts
