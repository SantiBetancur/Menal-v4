import React from 'react'
import { Buttons } from './Buttons'


export const Resultados = () => {
  return (
    <div>
        <section className='min-header-2'>
            <img src={require(`../img/logo.png`)}/>
            <p className='p'>Estos son tus resultados</p>
            <Buttons color='button-1' text='INICIO' route = '/'/>
        </section>
        <section className='sec-result'>
            <p className='text1'>
                PUNTAJE OBTENIDO
                <br/>
                <span>70</span>
            </p>
            <p className='text2'>
                ESTAS SON NUESTRAS RECOMENDACIONES PARA TI
                <br/>
                <div className='recomend'>
                    Te recomendamos que cojas las cosas con calma.
                    Que no pienses tanto que lo malo que podría ser 
                    hacer algo diferente. Todo lo diferente 
                    nos pone incomodos al principio pero no por
                    eso debemos dejar de hacer cambios en nuestras vidas.
                </div>
            </p>



        </section>
    </div>
  )
}
