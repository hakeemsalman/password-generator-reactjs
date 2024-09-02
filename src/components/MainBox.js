"use client"
import React, { useState } from 'react'
import { PasswordInput } from './PasswordInput'
import ToggleButtons from './ToggleButton/ToggleButtons'
import { GenerateButton } from './GenerateButton'
import { PasswordOutput } from './PasswordOutput'

export const MainBox = () => {

  const toggleId = ['uppercase', 'lowercase', 'number', 'symbol'];

  const [lengthValue, setLengthdValue] = useState(null);

  const handlePasswordValue = (data) => {
    setLengthdValue(data);
  }

  const [toggleData, setToggleData] = useState([
    {
      id: 'uppercase',
      isChecked: false,
    },
    {
      id: 'lowercase',
      isChecked: false,
    },
    {
      id: 'number',
      isChecked: false,
    },
    {
      id: 'symbol',
      isChecked: false,
    }
  ])

  const handleToggleData = (data) =>{
    console.log('value data',data);
    setToggleData(prevState => 
      prevState.map(item =>
        item.id === data.id ? { ...item, isChecked: data.isChecked } : item
      )
    );
  }

  return (
    <div className='flex flex-col gap-5 p-7 bg-white text-[#161A30] rounded-md'>
      <PasswordInput passwordInputValue={handlePasswordValue} />
      <div className='flex flex-row gap-40'>
        <div className='flex flex-col items-start p-2'>
          {toggleId.map((data, index) => (
            <ToggleButtons key={index} name={`include ${data}`} id={data} updatedToggleData={handleToggleData}/>
          ))}
        </div>
        <div className='m-auto'>
          <GenerateButton passwordLenght={lengthValue} toggleData={toggleData}/>
        </div>
      </div>
      <PasswordOutput />
    </div>
  )
}
