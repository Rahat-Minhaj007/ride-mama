import React from 'react';
import { Map,  Marker, GoogleApiWrapper } from 'google-maps-react';
import './Map.css';

const GoogleMap = (props) => {

    const mapStyles = {
        minWidth: '500px',
        maxWidth: "600px",
        height: '600px',
        borderRadius: "10px",
        padding: "10px"
    };
    return (




        <div>
            <Map
                google={props.google}
                zoom={7}
                className="gogleMap"
                style={mapStyles}
                initialCenter={{
                    lat: 23.6850,
                    lng: 90.3563
                }}
            >
                <Marker position={{
                    lat: 23.3813964,
                    lng: 92.2861862
                }} />
                <Marker position={{
                    lat: 24.3135237,
                    lng: 91.7075346
                }} />
                <Marker position={{
                    lat: 21.8161455,
                    lng: 89.3926256
                }} />
            </Map>
        </div>

    );
};



export default GoogleApiWrapper({
    apiKey: ("AIzaSyD3gVhxk0nSYrhIDYjwwjhtYgIZxabuo8o")
})(GoogleMap)