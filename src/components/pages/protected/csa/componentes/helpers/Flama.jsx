import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

export default class Flama extends Component {

    constructor(...props) {

        super(...props)
    }

    render() {
        return (
                        <div className="col s6 center">

                            {(this.props.fire === 0)
                                ?
                                 <i className="material-icons large circle white center-align hoverable"  >whatshot</i>
                                 
                                :
                    <i className="material-icons large circle red center-align hoverable" >whatshot</i>
                    
                            }
                            <p className="black-text">Módulo {this.props.modulo}</p>
                        </div>

        )//Fin return

    } //Fin render()

} // Fin Class