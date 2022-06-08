import '../styles/CardContainer.css';
import Cards from './Cards';

const CardContainer = (props) => {
  return (
    <section className='card-container'>
      <Cards data={props.data}/>
    </section>
  )
}

export default CardContainer;
