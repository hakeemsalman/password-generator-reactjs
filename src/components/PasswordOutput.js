import React from 'react'

export const PasswordOutput = (props) => {

  const handleCapture = () =>{
    console.log(props)
  }
  return (
    <div className='flex flex-row gap-5 justify-between'>
      <input className='w-2/3 py-2 px-2 rounded-md bg-gray-100 border-2 border-[#161A30]'  type='text' />
      <button className='py-3 px-5 bg-[#161A30] text-white rounded-full' onClick={handleCapture}>Copy to clipboard</button>
    </div>
  )
}
