import React from 'react'
import './NavItem.css'

export default function NavItem(props) {
    return (
        <div className='navItem'>
            <a className='link' href={props.link}>
                <i className={`fa fa-${props.icon}`}></i> {props.titulo}
            </a>
        </div>

    )
}
