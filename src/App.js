import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import ClassList from './components/classes/ClassList';
import PeopleInSpace from './components/UI/PeopleInSpace';
import PersonItem from './components/UI/PersonItem';
import Location from './components/UI/Location';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, useMap, marker } from 'react-leaflet';
import Further from './components/UI/Further';
import Footer from './components/UI/Footer';


function App() {
  
  

  const [pis, setPis] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState([])
  const [isLoadingLocation, setIsLoadingLocation] = useState(true)
  

  
  useEffect(() => {
      const fetchPis = async () => {
        const result = await axios(`http://api.open-notify.org/astros.json`)
        
        console.log(result.data)
        setPis(result.data)
        
        setIsLoading(false)
        
      }
fetchPis()
  }, [])

  useEffect(() => {
      const fetchLocation = async () => {
        const result = await axios('http://api.open-notify.org/iss-now.json')

        console.log(result.data)
        setLocation(result.data)
         
        setIsLoadingLocation(false) 
      }
      fetchLocation()

      setInterval(fetchLocation, 1000);
  }, [])


 
  
  
  return (
    <div className="App">
      <Header />
      <div className="content">
      <Location isLoadingLocation={isLoadingLocation} location={location}/>
      <PeopleInSpace isLoading={isLoading} pis={pis}/>
      <Further />
      
      </div>
      <Footer />


      

    </div>
  );
}

export default App;
