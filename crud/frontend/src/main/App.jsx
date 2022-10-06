import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import React from 'react'

export default function App(props) {
  return (
    <BrowserRouter>
      <div className='app'>
        <Logo></Logo>
        <Nav></Nav>
        <Routes></Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>

  )
}
