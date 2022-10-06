import './Nav.css'

import './NavItem.css'

import NavItem from './NavItem'

import React from 'react'

export default function Nav(props) {
  return (
    <aside className='menu-area'>
      <nav className="menu">

        <NavItem link='/' icon='home' titulo='Início'></NavItem>
        
        <NavItem link='/users' icon='users' titulo='Usuários'></NavItem>

        
      </nav>
    </aside>
  )
}
