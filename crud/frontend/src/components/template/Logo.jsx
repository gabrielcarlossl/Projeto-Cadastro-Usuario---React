import './Logo.css'
import logo from '../../assets/imgs/lambda.png'
import React from 'react'

export default function Logo(props) {
  return (
    <aside className='logo'>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
    </aside>
  )
}
