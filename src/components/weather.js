import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React, { useEffect, useState } from "react";


const Weather = (props) => {
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);

useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '63ec11fadfd81c91cc88a40dc7c8befd',
        lat: lat,
        lon: long,
        lang: 'id',
        unit: 'metric', // values are (metric, standard, imperial)
        
      });
  return (
    <ReactWeather
    data={data}
    lang="en"
    locationLabel= 'Padang'
    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}

  />
    );
};
export default Weather;