import React, { Component } from 'react'
import loading from '../assets/loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="Loading"></img>
      </div>
    )
  }
}
