import '../styles/CardContainer.css';
import Cards from './Cards';

const CardContainer = (props) => {

  return (
    <section className='card-container'>
      {props.data && <Cards data={props.data} loading={props.loading}/>}
    </section>
  )
}

export default CardContainer;
