import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import axios from 'axios'



class PeticionesHTTPAxios extends Component {
    // Se extiende de la clase Component el Componente principal (mi Aplicación) 

    constructor(...props) {

        super(...props)

        this.state = {

            temperature:[]
        }
  // API DE NESTICO: https://documenter.getpostman.com/view/1636651/RW8DnneT
/*
        axios({
            method: 'get',
            url: 'https://polar-taiga-96306.herokuapp.com/categoria/grafica',
            headers:{
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InJvbGUiOiJBRE1JTl9ST0xFIiwiZXN0YWRvIjp0cnVlLCJnb29nbGUiOmZhbHNlLCJfaWQiOiI1Yjk5ODM1YjQyMzcwMjAwMTRmZjllMWMiLCJub21icmUiOiJnZXJtYW4iLCJlbWFpbCI6ImdlckBnbWFpbC5jb20iLCJmZWNoYSI6IldlZCBTZXAgMTIgMjAxOCAyMToyMTozMSBHTVQrMDAwMCAoVVRDKSIsIl9fdiI6MH0sImlhdCI6MTUzNjg5ODEyNSwiZXhwIjoxNTM3MDcwOTI1fQ.r4e8TroqXdgAEQXjPcT9_AARsVWiryV8HnJSN-IMJ1o'
            }
        }).then(response => {
            console.log(response.data);

                this.setState({
                    temperature: response.data
                }) 
            })
            .catch(function (error) {
                console.log(error);
            });
        // autobinding del evento sintetico handleOnClick
    */
    
    }// Fin del constructor

    componentDidMount(){

        axios({
            method: 'get',
            url: 'https://csa-systems.herokuapp.com/sensores/datos/octubre-2018',
         
        }).then(response => {
            console.log(response.data);


            this.setState({
                temperature: response.data.temperature
            })
        })
            .catch(function (error) {
                console.log(error);
            });
       
    }// Fin del componentDidMount

   

    render(){

    return(
       
        <div>
            <h2>Objeto Json </h2>
            <p>Este objeto Json fue traido desde un servidor
                de Node.js:
            </p>
                    <ul className="pure-menu-list">
               
                     {/* {this.state.temperature.map(temp =>

                    <li className="pure-menu-item" >{temp}</li>

                        )} */}
                    </ul>
                </div>

    ) // Fin del return

    }// Fin del Render

}// Fin de la clase Chart

export default PeticionesHTTPAxios