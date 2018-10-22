import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

export default class CsaInicio extends Component {

    render() {
        return (
            <article className="row">

                <h1 className="col s12 black-text">Componente Inicial</h1>

                <p>Este componente tendrá toda la información del sistema unida</p>

            </article>

        )//Fin return

    } //Fin render()

} // Fin Class