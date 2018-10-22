import React from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component


const User = (props) => (
    // Cuando se llame el componente Course recibirá un id, name y teacher
    // por medio de las props que se le pasan al compoente

        <div>
            <img src="./german.jpg" alt={props.name}/> 
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div>
)


export default User