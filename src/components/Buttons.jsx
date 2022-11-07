import React from 'react'
import '../stylesheets/Buttons.css'
import { Link } from 'react-router-dom'

export const Buttons = (props) => {
  return (
  
    <Link to={props.route}>
        <input type='button' className={props.color} value={props.text} />
    </Link>
  
  )
}
