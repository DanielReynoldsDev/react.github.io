import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, icon } from 'react-leaflet'
import L from 'leaflet';

// const issIcon = L.icon({
//   iconUrl: '../img/iss.png',
//   iconSize: [50, 32],
//   iconAnchor: [25, 16]
// });
// console.log(issIcon);

// L.marker([0, 0], { icon: issIcon }).addTo(map);



const Location = ( {location, isLoadingLocation}) => {
  return isLoadingLocation ? ( <h1>Loading...</h1>) : (

    <div className='cards'>
    <div className="location-container">
    <h2>The International Space Station</h2>
    <p >
      Since late 1998 the International Space Station (ISS) has been orbiting the earth. It's 
      purpose is to serve as a laboratory in space whilst also providing a home to astronauts.
      
      It has an average altitude of 250 Miles and travel 
      speed of 17,500mph allowing it to orbit the entire planet in approximately 90 minutes.
    </p>
    
    <h2>The location of the ISS is currently:</h2>
    <h1>{location.iss_position.latitude},{location.iss_position.longitude}</h1>
    </div>
    
    
    
    
    
    
    
    <MapContainer center={[location.iss_position.latitude, location.iss_position.longitude]} zoom={3} scrollWheelZoom={false}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[location.iss_position.latitude, location.iss_position.longitude]}>
    </Marker>
    </MapContainer>

    





  </div>
  )
}

export default Location
