//Helper que hace la Autenticación con fireBase:

import {ref, firebaseAuth} from '../../data/config'
// Importa el método firebase.auth dentro de la constante firebaseAuth.

/* Para autenticar con correo electrónico:

Se debe ejecutar el método (Una promesa):
.createUserWithEmailAndPassword(email, password) de firebaseAuth
Si se resuelve la promesa (usuario y contraseña correctos), se Guarda el Usuario: .then(saveUser)
Si NO se resuelve devuelve el error por: .catch(err)
*/

//Se crean todos los métodos auxiliares que me van 
// a permitir trabajar con mi APP en firebase:

// Función para crear email, password que recibe como parametro email, password
const auth = (email, password) => ( 
    firebaseAuth()
        .createUserWithEmailAndPassword(email, password) // Es una promesa.
            .then(saveUser) // Si se resuelve la promesa se Guarda el Usuario             
)

// Función para crear un usuario desde una APP externa: Resive el "usuario" como parámetro
const saveUser = (user) => {

    ref
        .child(`users/${user.uid}/info`)
        .set({
            email: user.email,
    
        })
        .then(() => user)
}

// Función para Logearse con email y Password: ejecuta el método .signInWithEmailAndPassword(email, password)
const login = (email, password) => firebaseAuth().signInWithEmailAndPassword(email, password)


// Función para Des-Logearse: ejecuta el método firebaseAuth.signOut()
const logout = () => firebaseAuth().signOut()


// Función para resetear el Password: Recibe email como parámetro.
const resetPassword = email => firebaseAuth().sendPasswordResetEmail(email)



// Se exporta por separado cada funcionalidad:

export { 
    saveUser,
    auth,
    login,
    logout,
    resetPassword
}
