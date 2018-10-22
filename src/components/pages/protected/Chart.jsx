import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import axios from 'axios'

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// Importa el/los tipos de gráficas que se renderizaran:
// Bar: Barra, Line: Linea, Pie: Torta/pastel, Doughnut: Dona.


class Chart extends Component{

     constructor(...props) {

        super(...props)

        this.state = {
            temperature:[],
            
            chartData: { } // Fin de chartData
        } // Fin deState

    }

    componentWillMount(){

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

                    chartData: {

                        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],

                            datasets: [

                                {// Linea 1
                                    label: '2018 Temperatura ºC',
                                    
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
                                    label: '2017 Temperatura ºC',
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
        })
        .catch(function (error) {
                  console.log(error);
        });
       
    }// Fin del componentDidMount


    render(){
        return(
        <div>
            <div className="Chart">

                    <Line
                        data={this.state.chartData}
                        //width={100}
                        //height={50}

                        options={{

                            title: {
                                display: true,
                                text: 'Comparación de Temperatura por año',
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
                    data={this.state.chartData}
                    //width={100}
                    //height={50}

                    options={{

                        title: {
                            display: true,
                            text: 'Comparación de Temperatura por mes',
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

export default Chart