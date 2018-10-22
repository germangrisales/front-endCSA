import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import Temperatura from "./Temperatura"

import Humedad from "./Humedad"

//import CalidadAire from "./componentes/CalidadAire"

import Fuego from "./Fuego"


 class Sensores extends Component {

    render() {
        return (
           <div>
                <Fuego></Fuego>

                <Temperatura></Temperatura>

                <Humedad></Humedad>
            
                
           
           </div>

        )//Fin return

    } //Fin render()

} // Fin Class

export default Sensores