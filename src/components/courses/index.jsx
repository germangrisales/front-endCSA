import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import CoursesList from "./CoursesList"
// Se importa el componente "CoursesList"

import CourseAddForm from "./CourseAddForm"
// Se importa el componente CourseAddForm.

import PropTypes from 'prop-types'
//Se importan las Props Types

import uid from 'uid'
// Importa uid de la librería uid

import { categories, courses, teachers } from '../../data/'
//Traeme la const categories, courses, teachers del index.jsx
// de la carpeta data
// Me toca hacer una destructuración ES6

import $ from "jquery"
// Se importa la libreria Jquery


class Courses extends Component{ 
// Se extiende de la clase Component el Componente principal (mi Aplicación)
   
    constructor(...props){

        super(...props)

        this.state = {
        // Objeto State: Lo componen 1 Arrays
            courses: courses
        //  courses: const courses = array de objetos con los cursos guardado en la carpeta data  
               
        }

    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    // Siempre que se crea un método se debe hacer el autobinding: Enlaza el this de la instancia con el this del constructor (buena practica) dentro del constructor
    }

    handleOnAddCourse(e) { // Se le pasa el evento (e) como parametro a la función
    // Método para agregar un curso: 
    // Se captura el value del formulario 
    // Se actualiza el estado con this.setState()
    // Se concatena el curso nuevo con los cursos guardados en el estado.
    
    // alert('Evento en React')
    e.preventDefault()
    
        let form = e.target // e.target = mi formulario (guarda la informacion de los inputs)

     
        console.log(Courses.defaultProps.teacher)
      
        console.log(form.teacher.value)

        console.log(form.categories.value)
    
    
        let  course = {

            id: (form.id.value) ? form.id.value : Courses.defaultProps.id,
            name: (form.name.value) ? form.name.value : Courses.defaultProps.name,
            poster: (form.poster.value) ? form.poster.value : Courses.defaultProps.poster,
            url: (form.url.value) ? form.url.value : Courses.defaultProps.url,
            amount: (form.amount.value) ? form.amount.value : Courses.defaultProps.amount,
            teacher: (form.teacher.value) ? form.teacher.value : Courses.defaultProps.teacher,
            date: form.date.value ? form.date.value : Courses.defaultProps.date,
            categories: (form.categories.value) ? form.categories.value.split(',') : Courses.defaultProps.categories
        
        }
        
        form.reset()    

        this.setState({
            courses: this.state.courses.concat([course])
        })

    }



    render(){
    // Renderiza el componente CoursesList si se le pasan como props
    // courses y el evento handleOnAddCourse
       
    if (!this.state.courses.length) {
    // Si: la longitud del arreglo courses es nula o indefinida
        return(
            <article className="Main-container">
                <p>No hay coursos disponibles.</p>
            </article>
        )
        
    }
    else{

        return (

            <article className="Main-container">

                <CourseAddForm onAddCourse={this.handleOnAddCourse} />

                <CoursesList courses={this.state.courses} />

            {
            /* Props courses: contiene la propiedad courses del objeto state.
            // Props onAddCourse: contiene el método handleOnAddCourse */ }
            </article>
        )

    }// R
    
    
    
    
    }// Fin Render()

} //Fin Class APP

// Que Tipo de Propiedades!
Courses.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    teacher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired
}

// Propiedades por defecto.       

Courses.defaultProps = {

    id: uid(10),
    name: 'Curso Desconocido',
    poster: 'https://ed.team/sites/default/files/edteam-logo-118.png?2abr2017',
    url: 'https://ed.team/cursos',
    amount: 40,
    teacher: 'Profesor No Asignado',
    date: 'Fecha No Definida',
    categories: ['Sin Categoría']
} 

export default Courses
//Se exporta el componente Courses