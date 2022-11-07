import React from 'react'
import { Buttons } from './Buttons'



export const NotLog = () => {
  return (
   <div>
        <section className='min-header-2'>
            <img src={require(`../img/logo.png`)}/>
            <p className='p'>Error</p>
            <Buttons color='button-1' text='INICIO' route = '/'/>
        </section>
        <div className='nt-text'>Necesitas Crear una cuenta o iniciar sesión.
            <br/>
            <Buttons color = 'button-1' text = 'Crear Cuenta' route='/Register/'/>
            <Buttons color = 'button-1' text = 'Ingresar' route='/Login/'/>
        </div>
   </div> 
    
  )
}
