import React, { StrictMode } from 'react'
import { useState } from 'react'
import { Buttons } from './Buttons'
import { Link } from 'react-router-dom';



export function TestAns(){
// Hook state de React    
const [option, setOption] = useState("");
var opt = option
// contador de input
var counter1 = 0



    function counter (){
            
        
            switch(opt){
                case 'Ningundia':
                     counter1 +=1
    
                    break

                case 'Nunca':
                     counter1 +=1
                
                    break

                case 'Casinunca':
                     counter1 +=2
                    
                     break
                
                case 'Devezencuando':
                     counter1 += 3

                    break 
                 
                    
                case 'Amenudo':
                     counter1 += 4
                    
                     break
                    
                case 'Muyamenudo':
                     counter1 +=5    
            
                     break

                case 'Variosdias':
                     counter1 += 2
                    break

        
                case 'Masdelamitaddelosdias':
                     counter1 += 3
                    break

                case 'Casitodoslosdias':
                     counter1 += 4
                    break

                default:
                    counter1 = counter1
          
            }
      
            
        console.log("counter: "+counter1)
    }
    counter()
    
    
        return(
           
            <React.StrictMode>

            <div>
            <section className='min-header-2'>
            <img src={require(`../img/logo.png`)}/>
            <p className='p'>TEST DE ANSIEDAD</p>
            <Buttons color='button-1' text='INICIO' route = '/'/>
         </section>

             <div className="container">
            <section className='section' id="p0">
                <h3>¿Te has sentido nervioso?</h3>
                    <label>
                        <input type='radio' value="Ningundia" id='p0.1' onChange={(e)=>setOption(e.target.value)} name='optionp0'/> Ningun dia
                    </label>
                 <label>
                    <input type='radio'  id='p0.2' onChange={(e)=>setOption(e.target.value)} name='optionp0'/> Varios dias
                </label>
                <label>
                    <input type='radio' value="Masdelamitaddelosdias" id='p0.3' onChange={(e)=>setOption(e.target.value)} name='optionp0'/> Mas de la mitad de los dias
                 </label>
                <label>
                     <input type='radio' value="Casitodoslosdias" id='p0.4' onChange={(e)=>setOption(e.target.value)} name='optionp0'/> Casi todos los dias
                </label>
    </section>
    {/* los saltos de linea son la division estre cada pregunta  */}
    
    <section className='section' id="p1">
      <h3>¿No has sido capaz de parar o controlar tus preocupaciones?</h3>
      <label>
          <input type="radio" value="Ningundia" id="p1.1" onChange={(e)=>setOption(e.target.value)} name='optionp1'/> Ningun dia
      </label>
      <label>
          <input type="radio" value="Variosdias" id="p1.2" onChange={(e)=>setOption(e.target.value)} name='optionp1'/> Varios dias
      </label>
      <label>
          <input type="radio" value="Masdelamitaddelosdias" id="p1.3" onChange={(e)=>setOption(e.target.value)} name='optionp1'/> Mas de la mitad de los dias
      </label>
      <label>
          <input type="radio" value="Casitodoslosdias" id="p1.4" onChange={(e)=>setOption(e.target.value)} name='optionp1'/> Casi todos los dias
      </label>
    </section>
    
    <section className='section' id="p2">
      <h3>¿Con qué frecuencia te has sentido nervioso o estresado?</h3>
      <label>
          <input type="radio" value="Ningundia" id="p2.1" onChange={(e)=>setOption(e.target.value)} name='optionp2'/> Ningun dia
      </label>
      <label>
          <input type="radio" value="Variosdias" id="p2.2" onChange={(e)=>setOption(e.target.value)} name='optionp2'/> Varios dias
      </label>
      <label>
          <input type="radio" value="Devezencuando" id="p2.3" onChange={(e)=>setOption(e.target.value)} name='optionp2'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="Amenudo" id="p2.4" onChange={(e)=>setOption(e.target.value)} name='optionp2'/> A menudo
      </label>
      <label>
          <input type="radio" value="Muyamenudo" id="p2.5" onChange={(e)=>setOption(e.target.value)} name='optionp2'/> Muy a menudo
      </label>
    </section>
    
    <section className='section' id="p3">
      <h3>¿Con qué frecuencia te has sentido seguro de tu capacidad para manejar tus problemas personales?</h3>
      <label>
          <input type="radio" value="Nunca" id="p3.1" onChange={(e)=>setOption(e.target.value)} name='optionp3'/> Nunca
      </label>
      <label>
          <input type="radio" value="Casinunca" id="p3.2" onChange={(e)=>setOption(e.target.value)} name='optionp3'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="Devezencuando" id="p3.3" onChange={(e)=>setOption(e.target.value)} name='optionp3'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="Amenudo" id="p3.4" onChange={(e)=>setOption(e.target.value)} name='optionp3'/> A menudo
      </label>
      <label>
          <input type="radio" value="Muyamenudo" id="p3.5" onChange={(e)=>setOption(e.target.value)} name='optionp3'/> Muy a menudo
      </label>
    </section>
    
    <section className='section' id="p4">
      <h3>¿Con qué frecuencia has sentido que las cosas van bien?</h3>
      <label>
          <input type="radio" value="Nunca" id="p4.1" onChange={(e)=>setOption(e.target.value)}/> Nunca
      </label>
      <label>
          <input type="radio" value="Casinunca" id="p4.2" onChange={(e)=>setOption(e.target.value)} name='optionp4'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="Devezencuando" id="p4.3" onChange={(e)=>setOption(e.target.value)} name='optionp4'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="Amenudo" id="p4.4" onChange={(e)=>setOption(e.target.value)} name='optionp4'/> A menudo
      </label>
      <label>
          <input type="radio" value="Muyamenudo" id="p4.5" onChange={(e)=>setOption(e.target.value)} name='optionp4'/> Muy a menudo
      </label>
    </section>
    
    <section className='section' id="p5">
      <h3>¿Con qué frecuencia sientes que no puedes afrontar todas las cosas que tienes que hacer?</h3>
      <label>
          <input type="radio" value="Nunca" id="p5.1" onChange={(e)=>setOption(e.target.value)} name='optionp5'/> Nunca
      </label>
      <label>
          <input type="radio" value="Casinunca" id="p5.2" onChange={(e)=>setOption(e.target.value)} name='optionp5'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="Devezencuando" id="p5.3" onChange={(e)=>setOption(e.target.value)} name='optionp5'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="Amenud" id="p5.4" onChange={(e)=>setOption(e.target.value)} name='optionp5'/> A menudo
      </label>
      <label>
          <input type="radio" value="Muyamenudo" id="p5.5" onChange={(e)=>setOption(e.target.value)} name='optionp5'/> Muy a menudo
      </label>
    </section>
    
    <section className='section' id="p6">
      <h3>¿Con qué frecuencia puedes controlar las dificultades de tu vida?</h3>
      <label>
          <input type="radio" value="Nunca" id="p6.1" onChange={(e)=>setOption(e.target.value)} name='optionp6'/> Nunca
      </label>
      <label>
          <input type="radio" value="Casinunca" id="p6.2" onChange={(e)=>setOption(e.target.value)} name='optionp6'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="Devezencuando" id="p6.3" onChange={(e)=>setOption(e.target.value)} name='optionp6'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="Amenudo" id="p6.4" onChange={(e)=>setOption(e.target.value)} name='optionp6'/> A menudo
      </label>
      <label>
          <input type="radio" value="Muyamenudo" id="p6.5" onChange={(e)=>setOption(e.target.value)} name='optionp6'/> Muy a menudo
      </label>
    </section>
    
    <section className='section' id="p7">
      <h3>¿Con qué frecuencia sientes que tienes todo bajo control?</h3>
      <label>
          <input type="radio" value="Nunca" id="p7.1" onChange={(e)=>setOption(e.target.value)} name='optionp7'/> Nunca
      </label>
      <label>
          <input type="radio" value="Casinunca" id="p7.2" onChange={(e)=>setOption(e.target.value)} name='optionp7'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="Devezencuando" id="p7.3" onChange={(e)=>setOption(e.target.value)} name='optionp7'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="Amenudo" id="p7.4" onChange={(e)=>setOption(e.target.value)} name='optionp7'/> A menudo
      </label>
      <label>
          <input type="radio" value="Muyamenudo" id="p7.5" onChange={(e)=>setOption(e.target.value)} name='optionp7'/> Muy a menudo
      </label>
    </section>
    
    <section className='section' id="p8">
      <h3>¿Con qué frecuencia te enfadas porque las cosas que te ocurren están fuera de tu control?</h3>
      <label>
          <input type="radio" value="Nunca" id="p8.1" onChange={(e)=>setOption(e.target.value)} name='optionp8'/> Nunca
      </label>
      <label>
          <input type="radio" value="Casinunca" id="p8.2" onChange={(e)=>setOption(e.target.value)} name='optionp8'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="Devezencuando" id="p8.3" onChange={(e)=>setOption(e.target.value)} name='optionp8'/> De vez en cuando
      </label>
      <label>
          <input type="radio" value="Amenudo" id="p8.4" onChange={(e)=>setOption(e.target.value)} name='optionp8'/> A menudo
      </label>
      <label>
          <input type="radio" value="Muyamenudo" id="p8.5" onChange={(e)=>setOption(e.target.value)} name='optionp8'/> Muy a menudo
      </label>
    </section>
    
    <section className='section' id="p9">
      <h3>¿Con qué frecuencia sientes que las dificultades se te acumulan tanto que no puedes superarlas?</h3>
      <label>
          <input type="radio" value="Nunca" id="p9.1" onChange={(e)=>setOption(e.target.value)} name='optionp9'/> Nunca
      </label>
      <label>
          <input type="radio" value="Casinunca" id="p9.2" onChange={(e)=>setOption(e.target.value)} name='optionp9'/> Casi nunca
      </label>
      <label>
          <input type="radio" value="Devez en cuando" id="p9.3" onChange={(e)=>setOption(e.target.value)} name='optionp9' /> De vez en cuando
      </label>
      <label>
          <input type="radio" value="Amenudo" id="p9.4" onChange={(e)=>setOption(e.target.value)} name='optionp9' /> A menudo
      </label>
      <label>
          <input type="radio" value="Muyamenudo" id="p9.5" onChange={(e)=>setOption(e.target.value)} name='optionp9'/> Muy a menudo
      </label>
    </section>
            <Link to='/Results/'>
                <button type='submit' className='button'>Enviar</button>
            </Link>
            
        </div>
       
    </div>
    </React.StrictMode>
     
        )
}    

