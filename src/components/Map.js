import '../styles/Map.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { apiKeys } from '../config'

const Map = (props) => {

  const { isLoaded }  = useLoadScript({
    googleMapsApiKey: `${apiKeys.apiKey1}${apiKeys.apiKey2}`
  })

  if (!isLoaded) {
    return (
      <div>Loading</div>
    )
  } else {
    return (
      <GoogleMap zoom={12} center={{lat: props.lat, lng: props.long}} mapContainerClassName='map' key={props.uniqueKey}>
        <Marker position={{lat: props.lat, lng: props.long}} />
      </GoogleMap>
    )
  }
}

export default Map
