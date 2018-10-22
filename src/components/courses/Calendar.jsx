import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
// Se importa el componente DatePicker de la dependencia instalada

import moment from 'moment';
// Se importa moment que lo usa internamente esta libreria

import 'react-datepicker/dist/react-datepicker.css';
// Para que el calendario tome los estilos de  la libreria 
// DatePicker

class Calendar extends Component{

    constructor(...props){
        super(...props)

        this.state = {
            // Estado
            startDate: moment() 
            // Fecha inicial Ninguna
        } 


        this.handleChange = this.handleChange.bind(this)


    }// Fin del constructor




    handleChange(date){
        // Iguala el estado con la fecha (Que elige el usuario) cuando haya un cambio
        this.setState({ 
            startDate:  date // Parametro que recibe el manejador
        })
    }

    render(){

        return(
            <DatePicker

                selected={this.state.startDate}
                onChange={this.handleChange}
                placeholderText= "Fecha"
                isClareable ={true}
                dateFormat = "DD/MM/YYYY"
                name = {this.props.name}

            />
        )

    }

} // Fin de Calendar

export default Calendar 

