import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import axios from 'axios'

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.


class Humedad extends Component {

    constructor(...props) {

        super(...props)

        this.state = {
            temperature: [],

            chartData0: {},

            chartData1: {},

            chartData2: {}// Fin de chartData
        } // Fin deState

    }

    componentWillMount() {

        axios({
            method: 'get',
            url: 'https://polar-taiga-96306.herokuapp.com/categoria/grafica',
            headers: {
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InJvbGUiOiJBRE1JTl9ST0xFIiwiZXN0YWRvIjp0cnVlLCJnb29nbGUiOmZhbHNlLCJfaWQiOiI1Yjk5ODM1YjQyMzcwMjAwMTRmZjllMWMiLCJub21icmUiOiJnZXJtYW4iLCJlbWFpbCI6ImdlckBnbWFpbC5jb20iLCJmZWNoYSI6IldlZCBTZXAgMTIgMjAxOCAyMToyMTozMSBHTVQrMDAwMCAoVVRDKSIsIl9fdiI6MH0sImlhdCI6MTUzNjg5ODEyNSwiZXhwIjoxNTM3MDcwOTI1fQ.r4e8TroqXdgAEQXjPcT9_AARsVWiryV8HnJSN-IMJ1o'
            }
        }).then(response => {


            this.setState({
                temperature: response.data.temperatura,
            })

            console.log(this.state.temperature);

            this.setState({

                chartData0: {

                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],

                    datasets: [

                        {// Linea 1
                            label: '2018 Humedad %',

                            data: this.state.temperature,

                            fillColor: 'rgba(255, 99, 132, 0.6)',
                            backgroundColor: 'rgba(25, 189, 255, 0.2)',

                            strokeColor: 'rgba(174, 240, 254, 0.9)',
                            borderColor: 'rgba(174, 240, 254, 1)',
                            borderWidth: 2,

                            pointStyle: 'cross',
                            pointBorderWidth: 1,
                            pointRadius: 7,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(209, 231, 255, 1)',
                            pointStrokeColor: 'rgba(209, 231, 255, 1)',
                            pointHighlightFill: 'rgba(174, 240, 254, 1)',
                            pointHighlightStroke: "rgba(174, 240, 254, 1)",



                        }, // Fin de linea 1

                        {// Linea 2
                            label: '2017 Humedad %',
                            data: [28, 29, 32, 36, 31, 29, 27, 23, 26, 27, 28, 30, 32, 34, 35, 36, 34, 34, 33, 29, 27, 25, 23, 25, 27],



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


                        } // Fin de linea 2

                    ]//Fin del DataSets

                }// Fin de chartData
            })

            this.setState({

                chartData1: {

                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],

                    datasets: [

                         {// Linea 2
                            label: 'Humedad %',
                            data: [28, 29, 32, 36, 31, 29, 27, 23, 26, 27, 28, 30, 32, 34, 35, 36, 34, 34, 33, 29, 27, 25, 23, 25, 27],



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


                        } // Fin de linea 2


                    ]//Fin del DataSets

                }// Fin de chartData
            })

            this.setState({

                chartData2: {

                    labels: ['0:00', '1:00:', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00:', '14:00', '15:00', '16:00', '17:00', '10:00', '19:00', '20:00', '21:00', '22:00', '23:00'],

                    datasets: [


                        {// Linea 1
                            label: 'Humedad %',

                            data: this.state.temperature,

                            fillColor: 'rgba(255, 99, 132, 0.6)',
                            backgroundColor: 'rgba(25, 189, 255, 0.2)',

                            strokeColor: 'rgba(174, 240, 254, 0.9)',
                            borderColor: 'rgba(174, 240, 254, 1)',
                            borderWidth: 2,

                            pointStyle: 'cross',
                            pointBorderWidth: 1,
                            pointRadius: 7,
                            pointBackgroundColor: 'rgba(209, 231, 255, 0.3)',
                            pointColor: 'rgba(209, 231, 255, 1)',
                            pointStrokeColor: 'rgba(209, 231, 255, 1)',
                            pointHighlightFill: 'rgba(174, 240, 254, 1)',
                            pointHighlightStroke: "rgba(174, 240, 254, 1)",



                        } // Fin de linea 1


                    ]//Fin del DataSets

                }// Fin de chartData
            })
        })
            .catch(function (error) {
                console.log(error);
            });

    }// Fin del componentDidMount


    render() {
        return (
            <div>
                <div className="Chart">

                    <Line
                        data={this.state.chartData0}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Comparación de Humedad por año',
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

                                    ticks: {
                                        display: true,
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
                        data={this.state.chartData1}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Humedad del mes',
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
                                        labelString: 'Dias',
                                        fontColor: 'black',
                                        fontSize: 20,
                                        position: 'top'
                                    },

                                    ticks: {
                                        display: true,
                                        labelString: 'Dias',
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
                        data={this.state.chartData2}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Humedad del día',
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