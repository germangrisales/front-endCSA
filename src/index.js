import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/';// ruta './components/' = './components/index.jsx' Por default busca el index .js o .jsx
import './index.css';


import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App/>,
    document.getElementById('root')
);

registerServiceWorker();
