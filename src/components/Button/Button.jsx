import React from 'react'
import { Link } from '../../style/styles'

function Button(props){
    return(
        <a target = '_blank' href = {props.href} rel="noreferrer"> 
            <Link >
                <i>{<props.icon />}</i>
                <p>{props.name}</p>
            </Link>
        </a>
    )
}

export default Button