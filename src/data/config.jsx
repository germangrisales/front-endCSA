// Archivo de configuración de Firebase:

// Si se usa Vanila Js:

/* <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>
    <script>
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyB4tYsB2DmWAV52Eqs0GGWtLdHnQr6AnGw",
        authDomain: "app-react-cero.firebaseapp.com",
        databaseURL: "https://app-react-cero.firebaseio.com",
        projectId: "app-react-cero",
        storageBucket: "app-react-cero.appspot.com",
        messagingSenderId: "137575498575"
      };
      firebase.initializeApp(config);
</script> */  

import firebase from 'firebase'

// Initialize Firebase
const config = {
//Tokens:

    apiKey: "AIzaSyB4tYsB2DmWAV52Eqs0GGWtLdHnQr6AnGw",
    authDomain: "app-react-cero.firebaseapp.com",
    databaseURL: "https://app-react-cero.firebaseio.com",
    projectId: "app-react-cero",
    storageBucket: "app-react-cero.appspot.com",
    messagingSenderId: "137575498575"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
// Este método prermite crear usuarios. 

export const firebaseAuth = firebase.auth
// Se exporta el método firebase.auth() pérmite
