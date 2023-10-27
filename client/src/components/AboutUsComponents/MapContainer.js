import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    position: 'relative',
    height: '400px',
    width: '100%'
  };

  return (
    <div className="container shadow p-4 mb-4 bg-white rounded">
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <Map
        google={props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 9.0108,  // Latitude of Ministry of Innovation and Technology, Addis Ababa, Ethiopia
          lng: 38.7613  // Longitude of Ministry of Innovation and Technology, Addis Ababa, Ethiopia
        }}
      >
        <Marker position={{ lat: 9.0108, lng: 38.7613 }} />
      </Map>
    </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC8IZDB5YvIzUCsRHsDiLswssMOb4vEwjQ'  // Replace 'YOUR_API_KEY' with your actual API key
})(MapContainer);