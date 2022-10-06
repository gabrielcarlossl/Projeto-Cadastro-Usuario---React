import React from 'react'
import { Link } from 'react-router-dom'
import './NavItem.css'

export default function NavItem(props) {
    return (
        <div className='navItem'>
            <Link to={props.link}>
                <i className={`fa fa-${props.icon}`}></i> {props.titulo}
            </Link>
        </div>

    )
}
