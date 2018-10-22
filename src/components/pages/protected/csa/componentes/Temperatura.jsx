import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import axios from 'axios'

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.


class Temperatura extends Component {

    constructor(...props) {

        super(...props)

        this.state = {

            metricsDay: {},// objeto general con la información de los dias

            chartDataModulesDay: {}, //Datos de grafica por dia.

            chartDataModulesDayAverage: {},

            dayAverage : [],

            metricsMonth: {},

            chartDataModulesMonth: {}, // Datos de la grafica de cada sensor individual

            chartDataModulesMonthAverage: {} // Datos de la gráfica promedio del mes todo los sensores
         
            // Fin de chartData
        } // Fin deState

    }

    componentWillMount() {

        axios({
            method: 'get',
            url: 'https://csa-systems.herokuapp.com/sensores/datos/search?dateSearch=2018-10-16',
        
        }).then(response => {

            this.setState({
                metricsDay: response.data.metrics
            })     
           // console.log(this.state.metricsDay)

            // Grafica de los 4 Modulos del dia
            this.setState({

                chartDataModulesDay: {

                    labels: this.state.metricsDay.hours,

                    datasets: [

                        {// Modulo 1: this.state.metrics.moduleTemperature.m1
                            label: 'M2 Temperatura: ºC',
                            data: this.state.metricsDay.moduleTemperature.m1,



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
                        {// Modulo 1: this.state.metrics.moduleTemperature.m1
                            label: 'M2 Temperatura: ºC',
                            data: this.state.metricsDay.moduleTemperature.m2,

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
                        {// Modulo 3: this.state.metrics.moduleTemperature.m1
                            label: 'M3 Temperatura: ºC',
                            data: this.state.metricsDay.moduleTemperature.m3,



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
                        {// Modulo 4: this.state.metrics.moduleTemperature.m1
                            label: 'M4 Temperatura: ºC',
                            data: this.state.metricsDay.moduleTemperature.m4,



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

                        {// Modulo 1: this.state.metrics.moduleTemperature.m1
                            label: 'Promedio modulos. Temperatura: ºC',
                            data: this.state.metricsDay.totalRelativeTemperature,



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

            // Temperatura promedio del dia
            this.setState({

                dayAverage: [this.state.metricsDay.totalTemperature.toFixed(2)]// ToFixed para limitar los decimales
            })
        })
            .catch(function (error) {
                console.log(error);
            });
            // Fin de la petición del Objeto metrics Day

        
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

                m1.push(element.temperatureModules[0])

            })

            this.state.metricsMonth.monthsArray.forEach(element => {

                m2.push(element.temperatureModules[1])

            })

            this.state.metricsMonth.monthsArray.forEach(element => {

                m3.push(element.temperatureModules[2])

            })

            this.state.metricsMonth.monthsArray.forEach(element => {

                m4.push(element.temperatureModules[3])

            })

            console.log(this.state.metricsMonth.monthsArray)

            let TotalTemperature = []

            this.state.metricsMonth.monthsArray.forEach(element => {

                TotalTemperature.push(element.totalTemperature)
            })

            console.log(TotalTemperature)

            
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

                        {// Modulo 1: this.state.metrics.moduleTemperature.m1
                            label: 'M1 Temperatura: ºC',
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
                        {// Modulo 1: this.state.metrics.moduleTemperature.m1
                            label: 'M2 Temperatura: ºC',
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
                        {// Modulo 3: this.state.metrics.moduleTemperature.m1
                            label: 'M3 Temperatura: ºC',
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
                        {// Modulo 4: this.state.metrics.moduleTemperature.m1
                            label: 'M4 Temperatura: ºC',
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

                chartDataModulesMonthAverage:  {

                    labels: daysArray,

                    datasets: [

                        {// Modulo 1: this.state.metrics.moduleTemperature.m1
                            label: 'Promedio de mes Temperatura: ºC',
                            data: TotalTemperature,



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


    render() {
        return (
            <div>
                
                <div className="Chart">

                    <Line
                        data={this.state.chartDataModulesDay}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Comparación de Temperatura por día',
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
                                        labelString: 'Temperatura',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: 'Temperatura',
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + ' ºC';
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
                                text: 'Promedio Temperatura por día',
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
                                        labelString: 'Temperatura',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: 'Temperatura',
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + ' ºC';
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

                <h5 className="card teal darken-1 white-text center hoverable">La temperatura TOTAL del dias es: {this.state.dayAverage}ºC</h5>

                <div className="Chart">

                    <Line
                        data={this.state.chartDataModulesMonth}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Temperatura modulos del mes',
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
                                        labelString: 'Temperatura',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: 'Temperatura',
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + ' ºC';
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
                                text: 'Temperatura Promedio del mes',
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
                                        labelString: 'Temperatura',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },
                                    ticks: {
                                        display: true,
                                        labelString: 'Temperatura',
                                        fontSize: 20,
                                        fontColor: 'black',
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + ' ºC';
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

export default Temperatura

