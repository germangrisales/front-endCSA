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

import '../../node_modules/purecss/build/menus.css'
// Framework Css para crear la UI (User Interface)

import './index.css'
// Archivo css principal dentro de carpeta 'Components'.


import 'materialize-css/dist/css/materialize.min.css'


import { firebaseAuth } from '../data/config'
//

import CSALogo from './media/CSA logo.png'
// Se importa la imagen en la ruta y se guarda en el objeto creado EDteamLogo 

//Importación de Páginas del Sitio Web:

import Home from './pages/' // // index.jsx de la carpeta pages
import About from './pages/About'

import Materialize from './pages/Materialize'


import Register from './pages/Register'
import Login from './pages/Login'
import Error404 from './pages/Error404'

import DashboardCourses from './pages/protected/'
 // index.jsx de la carpeta protected


import PeticionesHTTPAxios from './pages/protected/HttpAxios'
 // importa Axios de la carpeta protected

import Chart from './pages/protected/Chart'
 // importa Axios de la carpeta protected

import CSA from './pages/protected/csa/Csa'
// Index de la carpeta CSA de protectec


import { logout } from './helpers/Auth'

const PrivateRoute = ( {component: Component, authed, rest }) => (

    <Route        
        {...rest}
        render={
         props => authed === true // Operador ternario. Se evalua Auth (Expresión regular de ES6:)
             ? <Component {...props}/>
             : <Redirect to= { { pathname: '/login', state: {from: props.location} } } />
             // pathname: '/login'= Nombre de Ruta, El estado  "state:" lo toma del objeto: props.location
        }
    />

)

const PublicRoute = ({ component: Component, authed, rest }) => (

    <Route
        {...rest}
        render={
            props => authed === false // Operador ternario. Se evalua Auth
                ? <Component {...props} />
                : <Redirect to='/cursos' />
        }
    />

)

class App extends Component{ 
    // Se extiende de la clase Component el Componente principal (mi Aplicación) 
   
    constructor(...props){

        super(...props)

        this.state = {
        // Objeto State: Maejará la autenticación con Firebase
            
            authed: false, // Autorizado.

            loading: true // Condicion para que render() renderice una cosa u otra
                
            }
        // Siempre que se crea un método se debe hacer el autobinding: Enlaza el this de la instancia con el this del constructor (buena practica) dentro del constructor
       
        this.handleOnClick = this.handleOnClick.bind(this)
        // autobinding del evento sintetico handleOnClick
    }

    handleOnClick(e){
        
       // alert('click') 
        document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked')
        document.getElementById('toggle').classList.toggle('x')
    }

    componentDidMount(){
    // Aquí es donde se captura la Validación de FireBase

        this.removeListener = firebaseAuth().onAuthStateChanged(user => {
            if(user){
                this.setState({
                    authed: true,
                    loading: false
                })
            }else{
                this.setState({
                    loading: false
                })
            }

        })
    }

    componentWillUnmount(){

        this.removeListener()
         
    }

    render(){
        return this.state.loading === true // loading es === a true  ?si :No
            ? <h1>Cargando... </h1> // Si
            : (  // NO
                <Router >
                    <div>
                        <header className="custom-menu-wrapper">
                            <div className="pure-menu custom-menu custom-menu-top">
                                <a href="#" className="pure-menu-heading custom-menu-brand">
                                    <img className="edteam-logo" src={CSALogo} alt="EDteam"/>
                                </a>
                                <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick} ><s className="bar"></s><s className="bar"></s></a>
                            </div>
                            <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                                <div className="custom-menu-screen"></div>
                                <ul className="pure-menu-list">

                                    <li className="pure-menu-item">
                                    <Link to="/" className="pure-menu-link" onClick={this.handleOnClick}>Home</Link>
                                    </li>

                                    <li className="pure-menu-item">
                                        <Link to="/acerca" className="pure-menu-link" onClick={this.handleOnClick}>Acerca</Link>
                                    </li>
                                    {
                                        (this.state.authed)
                                        ?
                                            <span>
                                                <li className="pure-menu-item">
                                                    <Link to="/cursos" className="pure-menu-link" onClick={this.handleOnClick}>Cursos</Link>
                                                </li>

                                                <li className="pure-menu-item">
                                                    <Link to="/axios" className="pure-menu-link" onClick={this.handleOnClick}>Axios</Link>
                                                </li>

                                                <li className="pure-menu-item">
                                                    <Link to="/temperature" className="pure-menu-link" onClick={this.handleOnClick}>Temperatura Gráfica</Link>
                                                </li>

                                                <li className="pure-menu-item">
                                                    <Link to="/csa" className="pure-menu-link" onClick={this.handleOnClick}>CSA</Link>
                                                </li>

                                                <li className="pure-menu-item">
                                                    <Link
                                                     to="/logout" 
                                                     className="pure-menu-link"
                                                     onClick = {()=>{
                                                        logout()
                                                        this.setState({authed: false})
                                                        this.handleOnClick()
                                                    
                                                    }}>Logout</Link>
                                                </li>
                                            </span>
                                        :
                                          <span>

                                                <li className="pure-menu-item">
                                                    <Link to="/registro" className="pure-menu-link" onClick={this.handleOnClick}>Registro</Link>
                                                </li>

                                                <li className="pure-menu-item">
                                                    <Link to="/login" className="pure-menu-link" onClick={this.handleOnClick}>Login</Link>
                                                </li>


                                          </span>
                                  
                              }

                                    
                                </ul>
                            </div>
                        </header>
    
                              <Switch>
                                <Route path='/' exact component={Materialize} />
                                {/* {<Route path='/acerca' component={} />} */}
                                 <PublicRoute authed={this.state.authed} path='/registro' component={Register} />
                                 <PublicRoute authed={this.state.authed}  path='/login' component={Login} />
                                 <PrivateRoute authed={this.state.authed} path='/cursos' component={DashboardCourses} />

                                <PrivateRoute authed={this.state.authed} path='/axios' component={PeticionesHTTPAxios} />  

                                <PrivateRoute authed={this.state.authed} path='/csa' component={CSA} />
                                
                                <PrivateRoute authed={this.state.authed} path='/temperature' component={Chart} />  
                                
                                <PrivateRoute authed={this.state.authed} path='/logout' component={Login} />

                                 
                                 <Route component={Error404} />  
                              
                             </Switch>                  
                    </div>
                </Router>
            )
    
    }// Fin Render()

} //Fin Class APP


export default App
//Se exporta el componente APP