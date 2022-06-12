import '../styles/FavSpots.css';
import Map from './Map'
import PropTypes from 'prop-types'

const FavSpots = (props) => {

  let allFavs = props.favs.map(fav => {
    return (
      <section className='fav-container'>
        <div className='fav-box' key={fav.id}>
          <img className='fav-photo' src={fav.photo} alt={`A popular cliff diving area at ${fav.name} in ${fav.location}`}/>
          <div className='fav-details'>
            <div className='fav-name-location'>
              <p className='fav-name'>{fav.name}</p>
              <p className='fav-location'>{fav.location}</p>
            </div>
            <div className='fav-sub-details'>
              <div className='fav-sub-text'>
                <p className='fav-type'>Type: {fav.type}</p>
                <p className='fav-height'>Max Height: {fav.maxHeight} feet</p>
                <p className='fave-depth'>Water Depth: {fav.depth} feet</p>
              </div>
            </div>
          </div>
          <Map lat={fav.latLong[0]} long={fav.latLong[1]} uniqueKey={props.id}/>
        </div>
      </section>
    )
  })

  return (
    <>
      {allFavs}
    </>
  )
}

FavSpots.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    photo: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    type: PropTypes.string,
    maxHeight: PropTypes.number,
    depth: PropTypes.number,
    latLong: PropTypes.arrayOf(PropTypes.number)
  }))
}

export default FavSpots;
