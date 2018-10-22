import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { // Se importa react-router-dom y unos objetos necesarios

    BrowserRouter as Router,// Se le asigna un 'Alias' para asiganrle el nombre de las versiones anteriores y hacerlos compatibles.
    Route, // Objeto para el manejo de rutas.
    Link,// Objeto para el manejo de Enlaces
    Redirect,// Objeto para el manejo de Redireciones
    withRouter,// Objeto para hacer Switch para modificar el valor de una ruta
    Switch
} from 'react-router-dom'

import CsaInicio from "./componentes/index"

import Sensores from "./componentes/Sensores"

import Actuadores from "./componentes/Actuadores"

import Temperatura from "./componentes/Temperatura"

import Humedad from "./componentes/Humedad"

import CalidadAire from "./componentes/CalidadAire"

import Fuego from "./componentes/Fuego"

import Error404 from "../../Error404"

import Chart from '../../protected/Chart'

import CSALogo from '../../../media/CSA logo.png'

import './CSA.css'

class CSA extends Component {

    constructor(...props) {

        super(...props)

        this.state = {
            // Objeto State: 
        }
        // Siempre que se crea un método se debe hacer el autobinding: Enlaza el this de la instancia con el this del constructor (buena practica) dentro del constructor

        this.handleOnClick = this.handleOnClick.bind(this)
        // autobinding del evento sintetico handleOnClick
    }

    
    handleOnClick(e) {
        // e.preventDefault()
        // alert('click') 
        document.getElementById('tuckedMenu1').classList.toggle('custom-menu-tucked')
        document.getElementById('menu').classList.toggle('hiden')
    }


    render() {
        return (
            <Router>
                <div className="Main-container flexContainer">
                
                    <header className="custom-menu-wrapper header ">

                        <div class="pure-menu custom-restricted-width flexContainer">
                           
                            <span class="pure-menu-heading" onClick={this.handleOnClick}>CSA</span>
 
                        </div>
                        <div className="pure-menu pure-menu-vertical pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu1">
 
                            
                            <ul className="pure-menu-list menuCsa" id="menu" onClick={this.handleOnClick}>

                                <li className="pure-menu-item">
                                    <Link to="/csa/sensores" className="pure-menu-link" onClick={this.handleOnClick}>Sensores</Link>
                                </li>

                                <li className="pure-menu-item">
                                    <Link to="/csa/actuadores" className="pure-menu-link" onClick={this.handleOnClick}>Actuadores</Link>
                                </li>

                                <li className="pure-menu-item">
                                    <Link to="/csa/temperatura" className="pure-menu-link" onClick={this.handleOnClick}>Temperatura</Link>
                                </li>
                               
                                <li className="pure-menu-item">
                                    <Link to="/csa/humedad" className="pure-menu-link" onClick={this.handleOnClick}>Humedad</Link>
                                </li>

                                <li className="pure-menu-item">
                                    <Link to="/csa/calidadAire" className="pure-menu-link" onClick={this.handleOnClick}>Calidad de Aire</Link>
                                </li>


                                <li className="pure-menu-item">
                                    <Link to="/csa/fuego" className="pure-menu-link" onClick={this.handleOnClick}>Fuego</Link>
                                </li>

                            </ul>
                        </div>
                    </header>
                  
                    <Switch className="componenteCsa">
                        <Route className="SideMenu" exact path='/csa' component={CsaInicio} />
      
                        <Route className="SideMenu" path='/csa/sensores' component={Sensores} />

                        <Route className="SideMenu"path='/csa/actuadores' component={Actuadores} />

                        <Route className="SideMenu" path='/csa/temperatura' component={Chart} />

                        <Route className="SideMenu" path='/csa/humedad' component={Humedad} />

                        <Route className="SideMenu" path='/csa/calidadAire' component={CalidadAire} />

                        <Route className="SideMenu" path='/csa/fuego' component={Fuego} />
                    </Switch>

                </div>
            </Router>
        )//Fin return

    } //Fin render()

} // Fin Class

export default CSA