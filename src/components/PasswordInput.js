"use client"
import { maxNumberInput, minNumberInput } from '@/utils/constants';


// export const PasswordInput = () => {
//   const [passwordLength, setPasswordLength] = useState(8);

//   return (
//     <div className='flex flex-row py-2'>
//       <label htmlFor='passwordlength' className='flex flex-row gap-10 items-center'>Password Length&#58;
//         <input className='w-20 p-1' id='passwordlength' placeholder='6' value={passwordLength} type='number' max={maxNumberInput}/>
//       </label>
//     </div>
//   )
// }

import React, { Component } from 'react'

export  class PasswordInput extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       passwordLength : 8
    }
  }

  render() {

    const handleChange = (e) =>{
      e.preventDefault();
      this.setState({passwordLength : e.target.value});
    }
    return (
      <div>
        <div className='flex flex-row py-2'>
          <label htmlFor='passwordlength' className='flex flex-row gap-10 items-center text-xl'>Password Length&#58;
            <input className='w-20 p-1 ' id='passwordlength' placeholder='6' value={this.state.passwordLength} type='number' min={minNumberInput} max={maxNumberInput} onChange={handleChange}/>
          </label>
        </div>
      </div>
    )
  }
}

export default PasswordInput