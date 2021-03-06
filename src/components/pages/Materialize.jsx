import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

export default class Materialize extends Component {

    render() {
        return (
            <article className="Main-container">

                <div class="section no-pad-bot" id="index-banner">
                    <div class="container">
                        <br></br>
                            <h1 class="header center orange-text">CSA Control Avícola</h1>
                            <div class="row center">
                                <h5 class="header col s12 light">Sistema electrónico de monitoreo ávicola.</h5>
                            </div>
                            <div class="row center">
                                <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light orange">Login</a>
                            </div>
                            <br></br>
                    </div>
                </div>


                            <div class="container">
                                <div class="section"> 
                                    <div class="row">
                                        <div class="col s12 m4">
                                            <div class="icon-block">
                                                <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
                                                <h5 class="center">Monitoreo Electrónico</h5>

                                                <p class="light">Supevisión en tiempo real de variables influyentes en el proceso de crianza de aves con fines productivos.  </p>
                                            </div>
                                        </div>

                                        <div class="col s12 m4">
                                            <div class="icon-block">
                                                <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                                                <h5 class="center">Interfase App Web</h5>

                                                <p class="light">Amistosa interfase para una experiencia agradable de administración de información generada por el sistema.</p>
                                            </div>
                                        </div>

                                        <div class="col s12 m4">
                                            <div class="icon-block">
                                                <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
                                                <h5 class="center">Easy to work with</h5>

                                                <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <br></br>
                            </div>

                                    <footer class="page-footer orange">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col l6 s12">
                                                    <h5 class="white-text">Company Bio</h5>
                                                    <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


                                                </div>
                                                <div class="col l3 s12">
                                                    <h5 class="white-text">Settings</h5>
                                                    <ul>
                                                        <li><a class="white-text" href="#!">Link 1</a></li>
                                                        <li><a class="white-text" href="#!">Link 2</a></li>
                                                        <li><a class="white-text" href="#!">Link 3</a></li>
                                                        <li><a class="white-text" href="#!">Link 4</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col l3 s12">
                                                    <h5 class="white-text">Connect</h5>
                                                    <ul>
                                                        <li><a class="white-text" href="#!">Link 1</a></li>
                                                        <li><a class="white-text" href="#!">Link 2</a></li>
                                                        <li><a class="white-text" href="#!">Link 3</a></li>
                                                        <li><a class="white-text" href="#!">Link 4</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                       <div class="footer-copyright">
                                            <div class="container">
                                             <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                                            </div>
                                        </div>
                                    </footer>

            </article>

        )//Fin return

    } //Fin render()

} // Fin Class