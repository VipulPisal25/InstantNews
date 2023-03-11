import React, { Component } from 'react';
import image from '../assets/loading.gif';
export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
      <img src={image}/>
      </div>

    )
  }
}
