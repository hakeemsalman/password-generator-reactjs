import { maxNumberInput, minNumberInput } from '@/utils/constants';

import React, { Component } from 'react'

export class PasswordInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      passwordLength: 8,
    }
  }

  render() {

    const sendLength = () => {
      this.props.passwordInputValue(this.state.passwordLength);
    }
    const handleChange = async (e) => {
      e.preventDefault();
      this.setState({ passwordLength: e.target.value }, sendLength); // updating the value, and  after updating then, calling a callback function (sendLength).
    }


    return (
      <div className='flex flex-row py-2 justify-center'>
        <label htmlFor='passwordlength' className='flex flex-row gap-10 items-center text-xl'>Please select the length&#58;
          <input className='w-20 py-1 px-2 rounded-md bg-gray-100' id='passwordlength' value={this.state.passwordLength} type='number' min={minNumberInput} max={maxNumberInput} onChange={handleChange} />
        </label>
      </div>
    )
  }
}

export default PasswordInput