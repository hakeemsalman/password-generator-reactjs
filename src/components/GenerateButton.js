import React, { useState } from 'react'

export const GenerateButton = ({toggleData, isDisabled}) => {

  
 
  const handleChange = (e) =>{
    console.log(toggleData);
  }
  return (
    <button className={`py-3 px-5  text-white rounded-full ${isDisabled ? 'bg-gray-300' :'bg-[#161A30]'}`} disabled={isDisabled} onClick={handleChange}>
      Generate Password
    </button>
  )
}
