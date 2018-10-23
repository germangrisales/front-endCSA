import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import axios from 'axios'

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.

import Calendar from './helpers/Calendar'

import '../../../../../../node_modules/purecss/build/buttons.css'

import '../../../../../../node_modules/purecss/build/forms.css'

class Humedad extends Component {

    constructor(...props) {

        super(...props)

        this.state = {

            metricsDay: {},// objeto general con la información de los dias

            chartDataModulesDay: {}, //Datos de grafica por dia.

            chartDataModulesDayAverage: {},

            dayAverage: [],

            metricsMonth: {},

            chartDataModulesMonth: {}, // Datos de la grafica de cada sensor individual

            chartDataModulesMonthAverage: {}, // Datos de la gráfica promedio del mes todo los sensores

            dateData:'' // Fecha de datos que se quiere 
            // Fin de chartData
        } // Fin deState

        this.reciveDataDay = this.reciveDataDay.bind(this)  

    }

handleDataDay(){

    axios({
        method: 'get',
        url: `https://csa-systems.herokuapp.com/sensores/datos/search?dateSearch=${this.state.dateData}`,

    }).then(response => {

        this.setState({
            metricsDay: response.data.metrics
        })
        console.log(this.state.metricsDay)

        // Grafica de los 4 Modulos del dia
        this.setState({

            chartDataModulesDay: {

                labels: this.state.metricsDay.hours,

                datasets: [

                    {// Modulo 1: this.state.metrics.moduleHumidity.m1
                        label: 'M1 Humedad: %',
                        data: this.state.metricsDay.moduleHumidity.m1,



                        fillColor: 'rgba( 215, 91, 181,1)',
                        backgroundColor: 'rgba(125, 291, 181, 0.5)',

                        strokeColor: 'rgba(125,32,190,1)',
                        borderColor: 'rgba(255,214,127,1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    }, // Fin Modulo1
                    {// Modulo 1: this.state.metrics.moduleHumidity.m1
                        label: 'M2 Humedad: %',
                        data: this.state.metricsDay.moduleHumidity.m2,

                        fillColor: 'rgba( 225, 191, 81,1)',
                        backgroundColor: 'rgba(225, 191, 81, 0.5)',

                        strokeColor: 'rgba(255,252,95,1)',
                        borderColor: 'rgba(255,214,127,1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    }, // Fin de M2
                    {// Modulo 3: this.state.metrics.moduleHumidity.m1
                        label: 'M3 Humedad: %',
                        data: this.state.metricsDay.moduleHumidity.m3,



                        fillColor: 'rgba( 125, 191, 31,1)',
                        backgroundColor: 'rgba(215, 111, 281, 0.5)',

                        strokeColor: 'rgba(255,252,95,1)',
                        borderColor: 'rgba(255,214,127,1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    }, // Fin de M3
                    {// Modulo 4: this.state.metrics.moduleHumidity.m1
                        label: 'M4 Humedad: %',
                        data: this.state.metricsDay.moduleHumidity.m4,



                        fillColor: 'rgba( 25, 11, 31,1)',
                        backgroundColor: 'rgba(25, 255, 50, 0.5)',

                        strokeColor: 'rgba(55,152,85,1)',
                        borderColor: 'rgba(155,14,27,1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    } // Fin M4

                ]//Fin del DataSets

            }// Fin de chartData
        })

        // Grafica 4 Modulos PROMEDIO el dia
        this.setState({

            chartDataModulesDayAverage: {

                labels: this.state.metricsDay.hours,

                datasets: [

                    {// Modulo 1: this.state.metrics.moduleHumidity.m1
                        label: 'Promedio modulos. Humedad: %',
                        data: this.state.metricsDay.totalRelativeHumidity,



                        fillColor: 'rgba( 215, 91, 181,1)',
                        backgroundColor: 'rgba(125, 291, 181, 0.5)',

                        strokeColor: 'rgba(125,32,190,1)',
                        borderColor: 'rgba(255,214,127,1)',
                        borderWidth: 2,

                        pointBorderWidth: 3,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                        pointHighlightFill: 'rgba(255,214,127,1)',
                        pointHighlightStroke: 'rgba(255,214,127,1)'


                    } // Fin Modulo1
                ]//Fin del DataSets

            }// Fin de chartData
        })

        // Humedad promedio del dia
        this.setState({

            dayAverage: [this.state.metricsDay.totalHumidity.toFixed(2)]// ToFixed para limitar los decimales
        })
    })
        .catch(function (error) {
            console.log(error);
        });
        // Fin de la petición del Objeto metrics Day

}

componentDidMount() {

        axios({
            method: 'get',
            url: 'https://csa-systems.herokuapp.com/sensores/datos/octubre-2018',

        }).then(response => {

            let daysArray = [] // Crea arreglo vacio para meter id con los dias

            let m1 = [] // Valores del mes de M1

            let m2 = [] // Valores del mes de M2

            let m3 = [] // Valores del mes de M3

            let m4 = [] // Valores del mes de M4


            this.setState({
                metricsMonth: response.data.metrics
            })

            this.state.metricsMonth.monthsArray.forEach(element => {

                daysArray.push(element.id)

            })

            this.state.metricsMonth.monthsArray.forEach(element => {

                m1.push(element.humidityModules[0])

            })

            this.state.metricsMonth.monthsArray.forEach(element => {

                m2.push(element.humidityModules[1])

            })

            this.state.metricsMonth.monthsArray.forEach(element => {

                m3.push(element.humidityModules[2])

            })

            this.state.metricsMonth.monthsArray.forEach(element => {

                m4.push(element.humidityModules[3])

            })

            console.log(this.state.metricsMonth.monthsArray)

            let TotalHumidity = []

            this.state.metricsMonth.monthsArray.forEach(element => {

                TotalHumidity.push(element.totalHumidity)
            })

            console.log(TotalHumidity)


            // console.log({
            //     daysArray,
            //     m1,
            //     m2,
            //     m3,
            //     m4
            // })

            // Grafica de los 4 Modulos del dia
            this.setState({

                chartDataModulesMonth: {

                    labels: daysArray,

                    datasets: [

                        {// Modulo 1: this.state.metrics.moduleHumidity.m1
                            label: 'M1 Humedad: %',
                            data: m1,



                            fillColor: 'rgba( 215, 91, 181,1)',
                            backgroundColor: 'rgba(125, 291, 181, 0.5)',

                            strokeColor: 'rgba(125,32,190,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        }, // Fin Modulo1
                        {// Modulo 1: this.state.metrics.moduleHumidity.m1
                            label: 'M2 Humedad: %',
                            data: m2,

                            fillColor: 'rgba( 225, 191, 81,1)',
                            backgroundColor: 'rgba(225, 191, 81, 0.5)',

                            strokeColor: 'rgba(255,252,95,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        }, // Fin de M2
                        {// Modulo 3: this.state.metrics.moduleHumidity.m1
                            label: 'M3 Humedad: %',
                            data: m3,



                            fillColor: 'rgba( 125, 191, 31,1)',
                            backgroundColor: 'rgba(215, 111, 281, 0.5)',

                            strokeColor: 'rgba(255,252,95,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        }, // Fin de M3
                        {// Modulo 4: this.state.metrics.moduleHumidity.m1
                            label: 'M4 Humedad: %',
                            data: m4,



                            fillColor: 'rgba( 25, 11, 31,1)',
                            backgroundColor: 'rgba(25, 255, 50, 0.5)',

                            strokeColor: 'rgba(55,152,85,1)',
                            borderColor: 'rgba(155,14,27,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        } // Fin M4

                    ]//Fin del DataSets

                }// Fin de chartData

            }) // Fin del set state chartDataModulesMonth


            this.setState({

                chartDataModulesMonthAverage: {

                    labels: daysArray,

                    datasets: [

                        {// Modulo 1: this.state.metrics.moduleHumidity.m1
                            label: 'Promedio de mes Humedad: %',
                            data: TotalHumidity,



                            fillColor: 'rgba( 215, 91, 181,1)',
                            backgroundColor: 'rgba(125, 291, 181, 0.5)',

                            strokeColor: 'rgba(125,32,190,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        } // Fin Modulo1 

                    ]//Fin del DataSets

                }// Fin de chartData
            })

        })


            .catch(function (error) {
                console.log(error);
            });
        // Fin de la petición del Objeto metrics Day

    }// Fin del componentDidMount

reciveDataDay(e){

        e.preventDefault()

        let dateRaw = e.target.date.value

        let date = dateRaw.replace('/', '-').replace('/', '-')

        this.setState({

            dateData: date
        })

        console.log(this.state.dateData)

        axios({
            method: 'get',
            url: `https://csa-systems.herokuapp.com/sensores/datos/search?dateSearch=${this.state.dateData}`,

        }).then(response => {

            this.setState({
                metricsDay: response.data.metrics
            })
            console.log(this.state.metricsDay)

            // Grafica de los 4 Modulos del dia
            this.setState({

                chartDataModulesDay: {

                    labels: this.state.metricsDay.hours,

                    datasets: [

                        {// Modulo 1: this.state.metrics.moduleHumidity.m1
                            label: 'M1 Humedad: %',
                            data: this.state.metricsDay.moduleHumidity.m1,



                            fillColor: 'rgba( 215, 91, 181,1)',
                            backgroundColor: 'rgba(125, 291, 181, 0.5)',

                            strokeColor: 'rgba(125,32,190,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        }, // Fin Modulo1
                        {// Modulo 1: this.state.metrics.moduleHumidity.m1
                            label: 'M2 Humedad: %',
                            data: this.state.metricsDay.moduleHumidity.m2,

                            fillColor: 'rgba( 225, 191, 81,1)',
                            backgroundColor: 'rgba(225, 191, 81, 0.5)',

                            strokeColor: 'rgba(255,252,95,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        }, // Fin de M2
                        {// Modulo 3: this.state.metrics.moduleHumidity.m1
                            label: 'M3 Humedad: %',
                            data: this.state.metricsDay.moduleHumidity.m3,



                            fillColor: 'rgba( 125, 191, 31,1)',
                            backgroundColor: 'rgba(215, 111, 281, 0.5)',

                            strokeColor: 'rgba(255,252,95,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        }, // Fin de M3
                        {// Modulo 4: this.state.metrics.moduleHumidity.m1
                            label: 'M4 Humedad: %',
                            data: this.state.metricsDay.moduleHumidity.m4,



                            fillColor: 'rgba( 25, 11, 31,1)',
                            backgroundColor: 'rgba(25, 255, 50, 0.5)',

                            strokeColor: 'rgba(55,152,85,1)',
                            borderColor: 'rgba(155,14,27,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        } // Fin M4

                    ]//Fin del DataSets

                }// Fin de chartData
            })

            // Grafica 4 Modulos PROMEDIO el dia
            this.setState({

                chartDataModulesDayAverage: {

                    labels: this.state.metricsDay.hours,

                    datasets: [

                        {// Modulo 1: this.state.metrics.moduleHumidity.m1
                            label: 'Promedio modulos. Humedad: %',
                            data: this.state.metricsDay.totalRelativeHumidity,



                            fillColor: 'rgba( 215, 91, 181,1)',
                            backgroundColor: 'rgba(125, 291, 181, 0.5)',

                            strokeColor: 'rgba(125,32,190,1)',
                            borderColor: 'rgba(255,214,127,1)',
                            borderWidth: 2,

                            pointBorderWidth: 3,
                            pointRadius: 4,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: 'rgba(255, 200, 107, 0.6)',
                            pointHighlightFill: 'rgba(255,214,127,1)',
                            pointHighlightStroke: 'rgba(255,214,127,1)'


                        } // Fin Modulo1
                    ]//Fin del DataSets

                }// Fin de chartData
            })

            // Humedad promedio del dia
            this.setState({

                dayAverage: [this.state.metricsDay.totalHumidity.toFixed(2)]// ToFixed para limitar los decimales
            })
        })
            .catch(function (error) {
                console.log(error);
            });
        // Fin de la petición del Objeto metrics Day

    }

    render() {
        return (
            <div>
                <form className="pure-form AddForm" onSubmit={this.reciveDataDay}> 
                Ingrese fecha de consulta:
                    <Calendar name="date"> </Calendar> 
                    <input className="pure-button pure-button-primary" type="submit" value="Recibir Datos" /> 
                </form>
                <div className="Chart">

                    <Line
                        data={this.state.chartDataModulesDay}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Comparación de Humedad por día',
                                fontSize: 30,
                                fontColor: 'teal'

                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: 'black',
                                    fontSize: 20
                                }
                            },
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: 'Humedad',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: 'Humedad',
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + ' %';
                                        }
                                    }
                                }],

                                xAxes: [{
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: 'Hora',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },

                                    ticks: {
                                        display: true,
                                        labelString: 'Hora',
                                        fontSize: 16,
                                        fontColor: 'black',

                                    }
                                }]
                            }


                        }}
                    />



                </div>

                <div className="Chart">

                    <Line
                        data={this.state.chartDataModulesDayAverage}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Promedio Humedad por día',
                                fontSize: 30,
                                fontColor: 'teal'

                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: 'black',
                                    fontSize: 20
                                }
                            },
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: 'Humedad',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: 'Humedad',
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + ' %';
                                        }
                                    }
                                }],

                                xAxes: [{
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: 'Hora',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },

                                    ticks: {
                                        display: true,
                                        labelString: 'Hora',
                                        fontSize: 16,
                                        fontColor: 'black',

                                    }
                                }]
                            }


                        }}
                    />



                </div>

                <h5 className="card teal darken-1 white-text center hoverable">La humedad TOTAL del dias es: {this.state.dayAverage}%</h5>

                <div className="Chart">

                    <Line
                        data={this.state.chartDataModulesMonth}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Humedad modulos del mes',
                                fontSize: 30,
                                fontColor: 'teal'

                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: 'black',
                                    fontSize: 20
                                }
                            },
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: 'Humedad',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: 'Humedad',
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + ' %';
                                        }
                                    }
                                }],

                                xAxes: [{
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: 'Hora',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },

                                    ticks: {
                                        display: true,
                                        labelString: 'Hora',
                                        fontSize: 16,
                                        fontColor: 'black',

                                    }
                                }]
                            }


                        }}
                    />



                </div>

                <div className="Chart">

                    <Line
                        data={this.state.chartDataModulesMonthAverage}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Humedad Promedio del mes',
                                fontSize: 30,
                                fontColor: 'teal'

                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: 'black',
                                    fontSize: 20
                                }
                            },
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: 'Humedad',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: 'Humedad',
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + ' %';
                                        }
                                    }
                                }],

                                xAxes: [{
                                    scaleLabel: {
                                        display: 'true',
                                        labelString: 'Hora',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },

                                    ticks: {
                                        display: true,
                                        labelString: 'Hora',
                                        fontSize: 16,
                                        fontColor: 'black',

                                    }
                                }]
                            }


                        }}
                    />



                </div>

            </div>
        )

    }
}

export default Humedad

