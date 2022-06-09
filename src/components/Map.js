import '../styles/Map.css';
import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const Map = () => {

  const {}  = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY})
}

console.log('hey')

console.log(process.env.REACT_APP_API_KEY)

export default Map
