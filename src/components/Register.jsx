import React, { StrictMode } from 'react'
import { Buttons } from './Buttons'


const formhandleRegister = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data)
  //Inputs del Registro
  var input_user = data.get("user_input");
  var input_pass = data.get("pass_input");

  //Escribiendo en el LocalStorage
  localStorage.setItem("input_register_user", input_user);
  localStorage.setItem("input_register_pass", input_pass);
}

const redirect = () =>{
  window.location.href = '/Login/'
}

export function Register(){

    return(
      <StrictMode>
       
      <div> 
      <section className='min-header-2'>
         <img src={require(`../img/logo.png`)}/>
         <p className='p'>¡Registrate hoy gratis!</p>
         <Buttons color='button-1' text='INICIO' route = '/'/>
         
      </section>
     <div id="register" className="login-box">
       
  
     <form onSubmit={formhandleRegister}>
       
       <label htmlFor="username_register" className='class'>Crea un nombre de usuario</label>
       <input type="text" id="re"placeholder="Ejemplo: Miguel Salinas" name='user_input'/>
       <label htmlFor="password_register">Ingresa tu ID</label>
       <input type="password" id="rp" placeholder="Crea un ID (número de 8 caracteres)" name='pass_input'/>
 
        <input type="submit" value="Crear cuenta" onClickCapture={redirect}/>

       
      
       <a href="/Login/">¿Ya tienes cuenta? Ingresa aquí.</a>
     </form>
   </div>
  </div> 
  </StrictMode> 
  
    )
    
    
}
