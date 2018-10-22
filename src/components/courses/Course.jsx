import React from 'react'
import "./courses-list.css"
const Course = (props) =>  (
// Cuando se llame el componente Course recibirá un id, name y teacher
// por medio de las props que se le pasan al compoente

      
    <li className="CoursesList-item">
    
        <a className="CoursesList-link" href={props.url} target="_blank">
            <figure>
                <img src={props.poster} alt={props.name}/>
                <figcaption>
                    <h2>{props.name}</h2>
                </figcaption>
            </figure>
         </a>
        <section>
            
            <p>
                <i className="fa fa-graduation-cap" ></i>
                {props.teacher}
            </p>

            <p>
                <i className="fa fa-calendar-o" ></i>
                {props.date}
            </p>

            <p>
               <b> 
                    <i className="fa fa-dollar"></i>
                    {props.amount}
                </b>

                <b>
                    <i className="fa fa-key"></i>
                    {props.id}
                </b>
            </p>

            <p>
                <i className="fa fa-tags" ></i>
                {
                    props.categories.map(

                        (cat, index,arr)=>
                            (index === arr.length - 1)
                            ? cat
                            : `${cat}, `

                    )
                }

            </p>





        </section>
    </li> 
)


export default Course
// Se exporta course