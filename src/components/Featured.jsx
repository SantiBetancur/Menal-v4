import React from 'react'
import '../stylesheets/Featured.css'


export const Featured = (props) => {
  return (
    <div className='cont-featured'>
       {props.children}
    </div>
  )
}
