"use client"
import React, { useState } from 'react'
import { PasswordInput } from './PasswordInput'
import ToggleButtons from './ToggleButton/ToggleButtons'
import { GenerateButton } from './GenerateButton'

export const MainBox = () => {

  const [passwordValue, setPasswordValue] = useState(null);


  const handlePasswordValue = async (data) =>{
    setPasswordValue(data);
  }
  return (
    <div className='flex flex-col gap-5 p-7 bg-white text-[#161A30] rounded-md'>
      <PasswordInput passwordInputValue={handlePasswordValue} />
      <div className='flex flex-row gap-40'>
        <div className='flex flex-col items-start p-2'>
          <ToggleButtons name={'include UPPERCASE'} id={'toggleA'} />
          <ToggleButtons name={'include lowercase'} id={'toggleB'} />
          <ToggleButtons name={'include Numbers'} id={'toggleC'} />
          <ToggleButtons name={'include $ymbol'} id={'toggleD'} />
        </div>
        <div className='m-auto'>
        <GenerateButton/>
        </div>
      </div>
    </div>
  )
}
