import React from 'react'

import Main from '../template/Main'

export default function Home(props) {
    return (
        <Main icon='home' title='Início' subtitle='Projeto Cadastro de Usuários'>
            <div className='display-4'> Bem Vindo</div>
            <hr />
            <p className='mb-0'>Sistema para cadastro feito com  React.</p>
        </Main>
    )
}
 