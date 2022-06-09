import '../styles/Cards.css';

const Cards = (props) => {

  let allCliffs = props.data.map(cliff => {
    return (
      <div className='card-box' key={cliff.id}>
        <img className='card-photo' src={cliff.photo}/>
        <div className='card-details'>
          <div className='name-location'>
            <p className='card-name'>{cliff.name}</p>
            <p className='card-name'>{cliff.location}</p>
          </div>
          <div className='sub-details'>
            <div className='sub-text'>
              <p className='card-'>Type: {cliff.type}</p>
              <p className='card-name'>Max Height: {cliff.maxHeight} feet</p>
              <p className='card-name'>Water Depth: {cliff.depth} feet</p>
            </div>
            <button className='send-btn'>Send It</button>
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
