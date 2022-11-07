import React from 'react'
import '../stylesheets/Headers.css'

export const Headers = (props) => {
  return (
    <div className={props.type}>
        {props.children}</div>
  )
}
