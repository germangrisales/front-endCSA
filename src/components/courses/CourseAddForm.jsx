import React from 'react'
// Importa React de la librería React

import uid from 'uid'
// Importa uid de la librería uid

import Calendar from './Calendar'
// Importa el componente Calendario

import MultiSelect from './MultiSelect'
// Importa el componente MultiSelect

import { categories, teachers} from '../../data'
// Importa los objetos.json con las categorias y profesores


import '../../../node_modules/purecss/build/buttons.css'

import '../../../node_modules/purecss/build/forms.css'

import './course-add-forms.css'

const optionsTeachers = teachers.map(
    teacher => Object.assign(
                 {} , 
                 { label: teacher, value: teacher } 
            ) 
)// Fin map
// Clonación de objetos usando Map


const optionsCategories = categories.map(
    cat => Object.assign(
        {},
        { label: cat, value: cat }
    )
)// Fin map
// Clonación de objetos usando Map


// COMPONENTE SIN ESTADO QUE RENDERIZA EL FORMULARIO PARA AGREGAR CURSOS
const CourseAddForm = props => (

    // Cuando se llame el componente Course recibirá un id, name y teacher
    // por medio de las props que se le pasan al compoente

    <form className="pure-form AddForm" onSubmit={props.onAddCourse}>
     {/* Formulario para agregar cursos nuevos 
         onSubmit = {props.onAddcourse} -> hereda por medio de esta props el método handleOnAddCourse
     */}

        <input type="hidden" name="id" value={uid(10)} />

        <input type="text" placeholder="Nombre del Curso" name="name" />

        <input type="url" placeholder="poster" name="poster" />

        <input type="url" placeholder="web" name="url" />

        <input type="number" placeholder="costo" name="amount" />


        <MultiSelect
            name= "teacher"
            defaultSelect="Profesor No asignado"
            placeholder= "Elige el profesor(es) del curso"
            options= {optionsTeachers}
            
       />

        <MultiSelect
            name="categories"
            defaultSelect="Categorias No asignadas"
            placeholder="Elige la categoria del curso"
            options={optionsCategories}
        />
       
        <Calendar name="date"/>

        {/* value={uid(10)} =  id: código AlphaNúmerico  ÚNICO  aleatorio de 10 dígitos */}

        {/*
        <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
         Para crearle un id:(Número Entero aleatorio entre 0-100) 
        Math.random()= numero aleatorio entre 0-1
        */}

        <input className="pure-button pure-button-primary" type="submit" value="Guardar" />
   
    </form>
)


export default CourseAddForm
// Se exporta course