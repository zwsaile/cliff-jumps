import '../styles/Map.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { apiKeys } from '../config'
import PropTypes from 'prop-types'

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

Map.propTypes = {
  lat: PropTypes.number,
  long: PropTypes.number,
  uniqueKey: PropTypes.number
}

export default Map
