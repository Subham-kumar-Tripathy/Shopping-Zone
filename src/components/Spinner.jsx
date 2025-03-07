import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex items-center flex-col justify-center h-[100vh]'>
      <div className='spinner'></div>
      <h1>Loading....</h1>
    </div>
  )
}

export default Spinner
