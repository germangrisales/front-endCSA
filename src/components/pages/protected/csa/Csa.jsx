
import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { SideNavItem, SideNav, Modal, Button, Icon } from 'react-materialize'


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

import Locacion from "./componentes/Locacion"

import Error404 from "../../Error404"

import Chart from '../../protected/Chart'

import CSALogo from '../../../media/CSA logo.png'

import {user} from './componentes/helpers/usuario.json'

import User from './componentes/helpers/User'

import './CSA.css'

class CSA extends Component {

    constructor(...props) {

        super(...props)

        this.state = {
            user: user
        }
        // Siempre que se crea un método se debe hacer el autobinding: Enlaza el this de la instancia con el this del constructor (buena practica) dentro del constructor
    }



    render() {
        return (

            <Router>
                <div className="row" >

                    <div className="col s2 l2">

                        < SideNav
                            trigger={< Button className="teal"> CSA </Button >}
                            options={{ closeOnClick: true }}
                        >
                    
                        <SideNavItem icon='location_on'><Link to="/csa/location">Locación</Link></SideNavItem>

                        <SideNavItem icon='wb_sunny' ><Link to="/csa/temperatura"> TEMPERATURA</Link></SideNavItem>

                        <SideNavItem icon='cloud'><Link to="/csa/humedad"> HUMEDAD</Link></SideNavItem>
                        
                        <SideNavItem icon='whatshot'><Link to="/csa/fuego"> FUEGO</Link></SideNavItem>
                        
                        <SideNavItem icon='toys'><Link to="/csa/actuadores"> ACTUADORES</Link></SideNavItem>

                         <SideNavItem icon='wifi_tethering'><Link to="/csa/sensores">SENSORES</Link></SideNavItem>
                        

                    </SideNav >

                    </div>

                    <div className="col s10 l10">

                        <Switch className="componenteCsa">

                            <Route className="SideMenu" exact path='/csa' component={CsaInicio} />

                            <Route className="SideMenu" path='/csa/sensores' component={Sensores} />

                            <Route className="SideMenu" path='/csa/actuadores' component={Actuadores}/>

                            <Route className="SideMenu" path='/csa/temperatura' component={Temperatura}/>

                            <Route className="SideMenu" path='/csa/humedad' component={Humedad}/>

                            <Route className="SideMenu" path='/csa/calidadAire' component={CalidadAire}/>

                            <Route className="SideMenu" path='/csa/fuego' component={Fuego}/>

                            <Route className="SideMenu" path='/csa/location' component={Locacion} />

                        </Switch>
                    </div>
            </div >
        </Router >

            
        )//Fin return

    } //Fin render()

} // Fin Class

export default CSA


/*
    // <Router> 
    <div className=" row" >

        <div className="col s3 l2 blue">

            <Link className="collection-item" to="/csa/sensores">Sensores</Link>

            <Link className="collection-item" to="/csa/actuadores">Locación </Link>

            <Link  to="/csa/actuadores">Actuadores</Link>

            <Link className="waves-effect waves-light collection-item" to="/csa/temperatura">Temperatura</Link>

            <Link  to="/csa/humedad">Humedad</Link>

            <Link className="waves-effect waves-light" to="/csa/calidadAire">Calidad de Aire</Link>

            <Link to="/csa/fuego">Fuego</Link>

        </div>

        <div className="col s9 l10 grey">

            <Switch className="componenteCsa">

                <Route className="SideMenu" exact path='/csa' component={CsaInicio} />

                <Route className="SideMenu" path='/csa/sensores' component={Sensores} />

                <Route className="SideMenu" path='/csa/actuadores' component={Actuadores} />

                <Route className="SideMenu" path='/csa/temperatura' component={Chart} />

                <Route className="SideMenu" path='/csa/humedad' component={Humedad} />

                <Route className="SideMenu" path='/csa/calidadAire' component={CalidadAire} />

                <Route className="SideMenu" path='/csa/fuego' component={Fuego} />
            </Switch>
        </div>
    </div>
            </Router >

*/