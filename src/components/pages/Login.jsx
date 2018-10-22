import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { login, resetPassword } from '../helpers/Auth'

import '../helpers/forms.css' // No dejar espacios entre las rutas
import '../helpers/buttons.css'

import './login-register.css'

export default class Login extends Component {

    constructor(...props){
        super(...props)

        this.state = { loginMessage: null }
        
        this.handleOnSubmit = this.handleOnSubmit.bind(this)

        this.resetPassword = this.resetPassword.bind(this)

        this.setMessage = this.setMessage.bind(this)
    }

    handleOnSubmit(e){

        e.preventDefault()
        login(this.email.value, this.password.value)
            .catch(err => this.setState(this.setMessage(`Usuario o Password Incorrectos: ${err.message}`)))

    }

    setMessage(err){
        return { loginMessage: err }
    }

    resetPassword(){

        resetPassword(this.email.value) 
            .then(() => this.setState( this.setMessage(`Se ha enviado un correo electrónico a <b>${this.email.value}<b> para restablecer tu contraseña`) )  ) // Si se resuelve la promesa me devuelve
                .catch(err => this.setState( this.setMessage(`El correo: '${this.email.value}' NO se encuentra registrado`) ) )    
    }
    


    render() {
        return (
            <article className="Main-container">

                <h1>Login</h1>
                
                <form className= "pure-form AuthForm" onSubmit={this.handleOnSubmit} >

                    <input type="email" placeholder="E-mail" ref={email => this.email = email }/>

                    <input type="password" placeholder="Password" ref={password => this.password = password} />

                    {
                        this.state.loginMessage &&
                        <div className= "u-error"> 
                            <p> Error: &nbsp;{this.state.loginMessage}&nbsp; </p> {/* &nbsp= Espacios en blanco */}
                            <a href="#" onClick={this.resetPassword} className="alert-link">¿ Olvidaste tu contraseña ?</a>
                        </div>
                    }

                    <input className="pure-button pure-button-primary" type="submit" value="Login"/>

                </form>

            </article>

        )//Fin return

    } //Fin render()

} // Fin Class