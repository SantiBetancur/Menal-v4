import React from 'react'
import '../stylesheets/Grid.css'
import { Link } from 'react-router-dom'

export const Grid = (props) => {
  return ( 
    <div className='cont-grid'>
        <div className='cont-img'>
            <form>

                <Link to={props.link1}>
                    <input type='button' value='REVISAR'/>
                </Link>
            </form>
            <img src={props.img01} alt=''/>
            
            <div className='cont-text'>
                <p>{props.testName1}</p>
            </div>
        </div>
        <div className='cont-img'>
            <form>
                <Link  to={props.link2}>
                    <input type='button' value='REVISAR'/>
                </Link>
            </form>
            <img src={props.img02} alt=''/>
            <div className='cont-text'>
                <p>{props.testName2}</p>
            </div>
        </div>
        <div className='cont-img'>
            <form>
                <Link to={props.link3}>
                    <input type='button' value='REVISAR'/>
                </Link>
            </form>
            <img src={props.img03} alt=''/>
            <div className='cont-text'>
                <p>{props.testName3}</p>
            </div>
        </div>
    </div>
  )
}
