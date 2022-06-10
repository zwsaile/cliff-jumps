import '../styles/Cards.css';

const Cards = (props) => {

  const saveSpot = (favCliff) => {
    props.setFavs(prevState => [...prevState, favCliff])
  }

  let allCliffs = props.data.map(cliff => {
    return (
      <div className='card-box' key={cliff.id}>
        <img className='card-photo' src={cliff.photo} alt={`A popular cliff diving area at ${cliff.name} in ${cliff.location}`}/>
        <div className='card-details'>
          <div className='name-location'>
            <p className='card-name'>{cliff.name}</p>
            <p className='card-location'>{cliff.location}</p>
          </div>
          <div className='sub-details'>
            <div className='sub-text'>
              <p className='card-type'>Type: {cliff.type}</p>
              <p className='card-height'>Max Height: {cliff.maxHeight} feet</p>
              <p className='card-depth'>Water Depth: {cliff.depth} feet</p>
            </div>
            <button className='send-btn' onClick={() => saveSpot(cliff)}>Send It</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      {allCliffs}
    </>
  )
}

export default Cards;
