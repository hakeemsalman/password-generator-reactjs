"use client"
import React, { useEffect, useState } from 'react'
import { PasswordInput } from './PasswordInput'
import ToggleButtons from './ToggleButton/ToggleButtons'
import { GenerateButton } from './GenerateButton'
import { PasswordOutput } from './PasswordOutput'
import { toggleId } from '@/utils/constants'

export const MainBox = () => {


  const [lengthValue, setLengthdValue] = useState(8);
  const [isDisabled, setIsDisabled] = useState(true);
  const [password, setPassword] = useState('')


  const handlePasswordLengthValue = (data) => {
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

  useEffect(() => {
    let count = 0;
    toggleData.map(item => {
      if (item.isChecked != false) {
        count++;
      }
    })
    count > 0 ? setIsDisabled(false) : setIsDisabled(true);

  }, [toggleData])

  const handlePasswordValue = (data) =>{
    setPassword(data);
  }

  const handleToggleData = (data) => {
    setToggleData(prevState => (
      prevState.map(item =>
        item.id === data.id ? { ...item, isChecked: data.isChecked } : item
      )
    ));
  }


  return (
    <div className='flex flex-col gap-5 p-7 bg-white text-[#161A30] rounded-md'>
      <PasswordInput passwordInputValue={handlePasswordLengthValue} />
      <div className='flex flex-row gap-40'>
        <div className='flex flex-col items-start p-2'>
          {toggleId.map((data, index) => (
            <ToggleButtons key={index} name={`include ${data}`} id={data} updatedToggleData={handleToggleData} />
          ))}
        </div>
        <div className='m-auto'>
          <GenerateButton passwordLenght={lengthValue} toggleData={toggleData} isDisabled={isDisabled} passwordLength={lengthValue} setPassword={handlePasswordValue}/>
        </div>
      </div>
      <PasswordOutput password={password} />
    </div>
  )
}
