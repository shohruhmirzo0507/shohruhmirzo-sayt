import React from 'react'
import { useLocation } from 'react-router-dom'


function SingleRoute() {
  const data = useLocation().state
  console.log(data);


  return (
    <div className='container'>
        <img src={data?.url} alt="" />
        <h2>SingleRoute</h2>
    </div>
  )
}

export default SingleRoute