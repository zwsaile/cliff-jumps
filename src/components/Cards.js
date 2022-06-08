import '../styles/Cards.css';

const Cards = (props) => {

  return (
    props.data.cliffs.map((cliff) => {
      <div className='card-box' key={cliff.id}>
        <img className='card-photo' src={cliff.photo}/>
        <div className='card-details'>
          <p className='card-name'>{cliff.name}</p>
          <p className='card-'>{cliff.type}</p>
          <p className='card-name'>{cliff.location}</p>
          <p className='card-name'>{cliff.maxHeight}</p>
          <p className='card-name'>{cliff.depth}</p>
        </div>
      </div>
    })
  )
}

export default Cards;
