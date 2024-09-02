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
      let isChecked = e.target.checked ;
      console.log('toggle->',isChecked);
      this.setState({isChecked: isChecked})
    }
    return (
      <div className="flex items-center w-full py-2">
        <label htmlFor={this.props.id} className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id={this.props.id} className="sr-only" value={this.state.isChecked} onChange={handleChange} />
            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">
          </div>
          {this.props.name}
        </label>
      </div>
    )
  }
}
