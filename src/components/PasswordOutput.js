import React from 'react'

export const PasswordOutput = (props) => {

  const handleCapture = () => {
    let copyText = props.password;
    navigator.clipboard.writeText(copyText)
    .then(result => {
      console.log('result:', result);
    }).catch(error =>{
      throw new Error("Error", error);
    })
    
  }
  return (
    <div className='flex flex-row gap-5 justify-between'>
      <input className='w-3/5 py-1 px-2 rounded-md bg-gray-100 border-2 border-[#161A30]' readOnly type='text' value={props.password} />
      <button className='py-3 px-5 bg-[#161A30] text-white rounded-full' onClick={handleCapture}>Copy to clipboard</button>
    </div>
  )
}
