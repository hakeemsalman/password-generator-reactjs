"use client"
import React from 'react'
import { PasswordInput } from './PasswordInput'
import ToggleButtons from './ToggleButton/ToggleButtons'

export const MainBox = () => {
  return (
    <div className='flex flex-col p-7 bg-white text-[#161A30]'>
      <PasswordInput/>
      <ToggleButtons/>
    </div>
  )
}
