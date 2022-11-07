import React from 'react'
import { Buttons } from './Buttons'



var input_user;
var input_pass;
var user_DB;
var pass_DB;
var access = null;
const formhandleLogin = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data)
  //Input del Loggin
  input_user = data.get("username");
  input_pass = data.get("password");
  localStorage.setItem('name', input_user);
  //Leyendo LocalStorage
  user_DB = localStorage.getItem("Register username");
  pass_DB = localStorage.getItem("input_register_pass");
  if(input_pass === pass_DB){
      access = "t";
  }else{
     access = "f";
  }
  localStorage.setItem("access", access);
}

var route1 ; 
var route2 = 'NotFound/';

var access_db = localStorage.getItem("access");
  console.log("Login acces_db : "+access_db+" data: "+input_pass);
 
  const redirect = () =>{
    if(access_db === "t"){
      route1 = window.location.href = '/'
    }else{
      route1 = route2;
    }
    
  }

export function Login(){
 
    return(
      <div>
      <section className='min-header-2'>
         <img src={require(`../img/logo.png`)}/>
         <p className='p'>   Ingresa a tu cuenta</p>
         <Buttons color='button-1' text='INICIO' route = '/'/>
      </section> 
     <div className="login-box" id="login">
     <form onSubmit={formhandleLogin}>
       
       <label htmlFor="username" className='class'>Nombre</label>
       <input type="text" id="se" name='username'  placeholder="Ingresa tu nombre de usuario"/>
       
       <label htmlFor="password">ID</label>
       <input type="password" id="sp" name = 'password' placeholder="Ingresa tu ID"/>
       
          <input type="submit"  value="Ingresar" onClick={redirect}/>
       
     
     
       <a href="/Register/">¿No tienes cuenta? Crea una!</a>
     </form>
   </div>
  </div> 

    )
  }


 
  


