import '../styles/CardContainer.css';
import Cards from './Cards';

const CardContainer = (props) => {

  return (
    <section className='card-container'>
      {props.data ?
        <Cards data={props.data} favs={props.favs} setFavs={props.setFavs}/> :
        <p className='loading-msg'>Loading...</p>
      }
    </section>
  )
}

export default CardContainer;
