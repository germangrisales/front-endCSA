import React from 'react'
// NO se necesita exportar Component porque se va a crear
// un componente sin estado (constante Arrow function)

import Course from "./Course" 
// Se importa el componente Course.

import './courses-list.css'
//Css con los estilos de la lista

// Este componente NO tiene propsTypes por eso se le puede mandar a exportar
// directamente en la creación del Componente.
// Pero como no es una clase sino una constante que contiene una Arrow Function.

const CoursesList = (props) => (
/* Simpre deben los Nodos JSX estar contenido en un solo padre  */

    <ul className="CoursesList" >
                    {/* ul Contendrá los valores heredados del padre pasados al componente
                        por medio de las props: key   id   name   teacher    
                    */}
                    {
                    
            // .map(arreglo) : trabaja sobre un arreglo "courses" y devuelve uno transformado
            //                 dentro de una variable "course" 
            
            // Se "mapea" o "itera(recorre el indice)" del array contenido en la propiedad Courses,
            // es decir el metodo mira cuantos elementos tiene el array
            // y crea un array de esa misma cantidad dee elementos con
            // tranformaciones o adiciones que se hagan entre los parentesis
            // es una expresion array con una variable "courses" que retorna
            // un arreglo de <Course/> cada uno con la información que lleva 
            // dentro de cada indice de ese array.
           props.courses.map(course => (       
                        
            // Aqui dinamicamente se le pasan propiedades que vienen heredadas del 
            // los padres por medio de las props
                        <Course
            // Esta es la manera en que se recibe mas de una props por un componente
                            className="CoursesList-item"
                            key={course.id}
                            id={course.id}
            // key: se le agrega al componente cuando se van a crear dinamicamente para que 
            // react pueda representar de manera ÜNICA cada NODO en el virtual DOM y se le
            // asocia en este ejemplo al id
                            
                            name={course.name}
                            poster={course.poster}
                            url={course.url}
                            amount={course.amount}
                            teacher={course.teacher}
                            date={course.date}
                            categories={course.categories}

                        />
            
        ) ).reverse() // Para que despues de mapeado el arreglo lo invierta.
        
        }

     </ul>
)

export default CoursesList 