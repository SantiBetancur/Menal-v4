import { Grid } from './components/Grid';
import './App.css';
import { Buttons } from './components/Buttons';
import { Featured } from './components/Featured';
import { Headers } from './components/Headers';
import React from 'react';

  var route1;
  var route2;
  var route3;
  var route4 = '/NotFound/';

  var access_db = localStorage.getItem("access");

  console.log(access_db);
  if(access_db === "t"){
   route1 = '/Test01/'
   route2 = '/Test02/'
   route3 = '/Test03/'
  }else{
    route1 = route4
    route2 = route4
    route3 = route4
  }


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }
    render() {
        return (
        
        <div className="App">
        
        <section className='min-header'>
        <img src={require(`./img/logo.png`)}/>
        <p className='name-user'>Bienvenid@<span>{localStorage.getItem('name')}</span></p>
        <Buttons color='button-1' text='INICIO' route = '/'/>
        <Buttons color='button-1' text='REGISTRARSE' route = '/Register/'/>
        <Buttons color='button-2' text='MI PERFIL' route = '/Login/'/>
     </section>
   
   
    
    <Headers type='header-1'>
    TEST DE VALORACIÓN VALIDADOS POR LA OMS  
    <Grid
    img01 = {require(`./img/enf1.jpg`)}
    img02 = {require(`./img/enf2.jpg`)}
    img03 = {require(`./img/enf3.jpg`)}
    img04 = {require(`./img/enf2.jpg`)}
    link1 = {route1}
    link2 = {route2}
    link3 = {route3}
    testName1 = 'TEST DE ANSIEDAD'
    testName2 = 'TEST DE ESTRES'
    testName3 = 'TEST DE DEPRESIÓN'
    />
    </Headers>
    
    <Headers type='header-2'>CONOCE LOS MÉTODOS ALTERNATIVOS QUE TIENE EAFIT
    <Featured>
    <div className='slider'>
            <ul>
                <li>
                    <img src={require(`./img/sm1.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/sm2.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/sm3.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/sm4.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/conestudiantes.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/bl29.png`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/enf3.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/psicologia2.jpg`)} alt=''/>
                </li>
                <li>
                    <img src={require(`./img/masestudiantes.jpg`)} alt=''/>
                </li>
            </ul>
        </div>
    </Featured>
    </Headers>
    <Headers type='header-1'>
        
            <Grid
            img01 = {require(`./img/psicologia2.jpg`)}
            img02 = {require(`./img/sm1.jpg`)}
            img03 = {require(`./img/bl29.png`)}
            link1 = '/'
            link2 = '/'
            link3 = ''
            testName1 = 'PROGRAMAR CITA CON ESPECIALISTA'
            testName2 = 'VISITAR LA PÁGINA DE AUTOAYUDA DE EAFIT'
            testName3 = '¿DONDE ENCONTRAR AYUDA?'
            />
            
    </Headers>
    <Headers type = 'footer'>
        <img src={require(`./img/Log-1-Ardilla.png`)}/>
        <p>Líneas de atención de EAFIT: 0000000</p>
        <p> Gracias por Visitar MeNal.</p>
    </Headers>
    
    </div>
        )
    }
    
}
export default App;

