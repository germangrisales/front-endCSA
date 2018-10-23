import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import Flama from './helpers/Flama'

export default class Fuego extends Component {

    constructor(...props) {

        super(...props)

        this.state = {

            fire:[]

        }
        // Siempre que se crea un método se debe hacer el autobinding: Enlaza el this de la instancia con el this del constructor (buena practica) dentro del constructor
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(e) {

        // alert('click') 
        document.getElementById('flama').classList.toggle('white')
        document.getElementById('flama').classList.toggle('red')
    }


    render() {
        return (
    
                   
                    <div className="row">

                <h1 className="col s12 center teal-text hoverable">SENSORES FLAMA</h1>
                        
                        <Flama className="hoverable" modulo="1" fire={this.state.fire[0]} ></Flama>  
                    
                        <Flama modulo="2" fire={this.state.fire[1]} ></Flama>  
                        
                        <Flama modulo="3" fire={this.state.fire[2]} ></Flama>

                        <Flama modulo="4" fire={this.state.fire[3]} ></Flama>

                    </div>
            

        )//Fin return

    } //Fin render()

} // Fin Class