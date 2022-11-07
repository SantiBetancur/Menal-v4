import React from 'react'
import { Buttons } from './Buttons'
import { Link } from 'react-router-dom'

export const TestStress = () => {
  return (
    <div>
     <section className='min-header-2'>
        <img src={require(`../img/logo.png`)}/>
        <p className='p'>TEST DE ESTRES</p>
        <Buttons color='button-1' text='INICIO' route = '/'/>
     </section>
    <div className="container">
    
    <section className='section' id="p0">
      <h3> ¿Con qué frecuencia te has sentido afectado por un hecho o situación inesperada?</h3>
      <label>
          <input type="radio" value="1" id="p0.1" name="option"/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p0.2" name="option"/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p0.3" name="option"/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p0.4" name="option"/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p0.5" name="option"/> Muy a menudo
      </label>
    </section>
    {/* los saltos de linea son la division estre cada pregunta  */}
    
    <section className='section' id="p1">
      <h3>¿Con qué frecuencia te has sentido incapaz de controlar las cosas importantes en tu vida?</h3>
      <label>
          <input type="radio" value="1" id="p1.1" name="option"/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p1.2" name="option"/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p1.3" name="option"/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p1.4" name="option"/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p1.5" name="option"/> Muy a menudo
      </label>
    </section>

    <section className='section' id="p2">
      <h3>¿Con qué frecuencia te has sentido nervioso o estresado?</h3>
      <label> 
          <input type="radio" value="1" id="p2.1" name="option"/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p2.2" name="option"/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p2.3" name="option"/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p2.4" name="option"/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p2.5" name="option"/> Muy a menudo
      </label>
    </section>

    <section className='section' id="p3">
      <h3>¿Con qué frecuencia te has sentido seguro de tu capacidad para manejar tus problemas personales?</h3>
      <label>
          <input type="radio" value="1" id="p3.1" name="option"/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p3.2" name="option"/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p3.3" name="option"/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p3.4" name="option"/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p3.5" name="option"/> Muy a menudo
      </label>
    </section>

    <section className='section' id="p4">
      <h3>¿Con qué frecuencia has sentido que las cosas van bien?</h3>
      <label>
          <input type="radio" value="1" id="p4.1" name="option"/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p4.2" name="option"/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p4.3" name='option'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p4.4" name='option'/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p4.5" name='option'/> Muy a menudo
      </label>
    </section>

    <section className='section' id="p5">
      <h3>¿Con qué frecuencia sientes que no puedes afrontar todas las cosas que tienes que hacer?</h3>
      <label>
          <input type="radio" value="1" id="p5.1" name='option'/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p5.2" name='option'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p5.3" name='option'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p5.4" name='option'/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p5.5" name='option'/> Muy a menudo
      </label>
    </section>

    <section className='section' id="p6">
      <h3>¿Con qué frecuencia puedes controlar las dificultades de tu vida?</h3>
      <label>
          <input type="radio" value="1" id="p6.1" name='option'/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p6.2" name='option'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p6.3" name='option'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p6.4" name='option'/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p6.5" name='option'/> Muy a menudo
      </label>
    </section>

    <section className='section' id="p7">
      <h3>¿Con qué frecuencia sientes que tienes todo bajo control?</h3>
      <label>
          <input type="radio" value="1" id="p7.1" name='option'/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p7.2" name='option'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p7.3" name='option'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p7.4" name='option'/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p7.5" name='option'/> Muy a menudo
      </label>
    </section>

    <section className='section' id="p8">
      <h3>¿Con qué frecuencia te enfadas porque las cosas que te ocurren están fuera de tu control?</h3>
      <label>
          <input type="radio" value="1" id="p8.1" name='option'/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p8.2" name='option'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p8.3" name='option'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p8.4" name='option'/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p8.5" name='option'/> Muy a menudo
      </label>
    </section>

    <section className='section' id="p9">
      <h3>¿Con qué frecuencia sientes que las dificultades se te acumulan tanto que no puedes superarlas?</h3>
      <label>
          <input type="radio" value="1" id="p9.1" name='option'/> Nunca
      </label>
      <label>
          <input type="radio" value="2" id="p9.2" name='option'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="3" id="p9.3" name='option'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="4" id="p9.4" name='option'/> A menudo
      </label>
      <label>
          <input type="radio" value="5" id="p9.5" name='option'/> Muy a menudo
      </label>
    </section>
    <Link to='/Results/'>
                <button type='submit'  className='button'>Enviar</button>
    </Link>
  </div>
    </div>
    
  )
}

