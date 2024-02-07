import React, { Component } from 'react'
import notfoundImg from '../../Assets/Images/shutterstock_774749455.png'

export default class Notfound extends Component {
  render() {
    return (
      <div className='text-center'>
       <img src={notfoundImg} alt="notfoundImg" className='w-75' />
      </div>
    )
  }
}
