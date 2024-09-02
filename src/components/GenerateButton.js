import { lowerCaseLetters, numbers, Symbols, upperCaseLetters } from '@/utils/constants';
import React, { useState } from 'react'


export const GenerateButton = ({ toggleData, isDisabled,passwordLength,setPassword }) => {


  const generatePassword = (data) =>{
    let value = "";
    const characterListLength = data.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      value = value + data.charAt(characterIndex);
    }
    return value;
  }
  const handleChange = (e) => {
    let characterList = '';
    toggleData.map(item => {
      if (item.isChecked) {
        switch (item.id) {
          case 'uppercase':
            characterList += upperCaseLetters;
            break;
          case 'lowercase':
            characterList += lowerCaseLetters;
            break;
          case 'number':
            characterList += numbers;
            break;
          case 'symbol':
            characterList += Symbols;
            break;
          default:
            break;
        }
      }
    })
    setPassword(generatePassword(characterList));
  }
  return (
    <button className={`py-3 px-5  text-white rounded-full ${isDisabled ? 'bg-gray-300' : 'bg-[#161A30]'}`} disabled={isDisabled} onClick={handleChange}>
      Generate Password
    </button>
  )
}
