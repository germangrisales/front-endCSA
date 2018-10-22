import React, { Component } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Locacion extends Component {
    render() {
        return (

            <div className="row">
            <h1>Ubicación del emplazamiento</h1>
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={{ lat: 11.01571, lng: -74.808947 }} />

                <InfoWindow onClose={this.onInfoWindowClose}>
            
                </InfoWindow>
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAa7MY3k_XidU7pF4OFFnu-1Z9Rzx5P5sI")
})(Locacion)