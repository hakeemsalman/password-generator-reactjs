import React from 'react'

export const GenerateButton = () => {

  const handleChange = (e) =>{
    console.log(e);
    
  }
  return (
    <button className='py-3 px-5 bg-[#161A30] text-white rounded-full' onClick={handleChange}>
      Generate Password
    </button>
  )
}
