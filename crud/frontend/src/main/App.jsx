import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

import React from 'react'

export default function App(props) {
  return (
    <div className='app'>
        <Logo></Logo>
        <Nav></Nav>
        <Main icon='home' title='Início' subtitle='Projeto Cadastro de Usuários'>
          <div className='display-4'> Bem Vindo</div>
          <hr />
          <p className='mb-0'>Sistema para cadastro feito com  React.</p>
        </Main>
        <Footer></Footer>
    </div>
  )
}
