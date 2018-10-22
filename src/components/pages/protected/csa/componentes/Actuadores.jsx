import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { SideNavItem, SideNav, Modal, Button, Icon } from 'react-materialize'

import CSALogo from '../../../../media/CSA logo.png'


export default class Actuadores extends Component {

    constructor(...props) {

        super(...props)

    
        this.handleOnChangeLight = this.handleOnChangeLight.bind(this)
        this.handleOnChangeFan = this.handleOnChangeFan.bind(this)
    }

    handleOnChangeLight(e){

       var Luz = document.getElementById('luz')
       Luz.addEventListener('change',function(e){
        console.log("Luz: "+ e.target.checked) 
       }) 
    }

    handleOnChangeFan(e) {

        var Fan = document.getElementById('fan')
        Fan.addEventListener('change', function (e) {
            console.log("Ventilación: " + e.target.checked)
        })
    }
    
 
    render() {
        return (
            <div className="row container">
           
                <div class="col s6 switch">
                    <i class="material-icons large">lightbulb_outline</i>
                    <h3>Luz</h3>
                    <label> Off
                      <input type="checkbox" id="luz" onChange={this.handleOnChangeLight} />
                        <span class="lever"></span> 
                      On
                    </label>
                </div>

                <div class="col s6 switch center">
                    <i class="material-icons large">toys</i>
                    <h3>Ventilación</h3>
                    <label> Off <input type="checkbox" id="fan" onChange={this.handleOnChangeFan} />
                        <span class="lever"></span> On
                    </label>
                </div>

            </div>

        )//Fin return

    } //Fin render()

} // Fin Class