import React, { Component } from 'react'
import './toggleButtons.css';

export default class ToggleButtons extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isChecked: false
    }
  }
  render() {

    const handleChange = (e) =>{
      let isChecked = !e.target.checked ;
      console.log(isChecked);
      
      this.setState({isChecked: isChecked})
    }
    return (
      <div class="flex items-center justify-center w-full mb-12">
        <label for="toggleB" class="flex items-center cursor-pointer">
          <div class="relative">
            <input type="checkbox" id="toggleB" class="sr-only" value={this.state.isChecked} onChange={handleChange} />
            <div class="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div class="ml-3 text-gray-700 font-medium">
          </div>
        </label>
      </div>
    )
  }
}
