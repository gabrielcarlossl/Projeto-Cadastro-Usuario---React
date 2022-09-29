import './Main.css'
import React from 'react'
import Header from './Header'

export default function Main(props) {
  return (
    <>
        <Header></Header>
        <main className='content'>
            Conteudo
        </main>
    </>
  )
}
