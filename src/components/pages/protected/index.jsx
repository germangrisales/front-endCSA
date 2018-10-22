import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import Courses from '../../courses/'



export default class DashboardCourses extends Component {
// Componente para dar de alta a los cursos.
    render() {
        return (
            <article className="Main-container">

                <Courses/>

            </article>

        )//Fin return

    } //Fin render()

} // Fin Class