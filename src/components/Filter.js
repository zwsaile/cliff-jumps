import '../styles/Filter.css';
import PropTypes from 'prop-types'

const Filter = (props) => {

  const handleName = (event) => {
    const newName = event.target.value.trim();
    props.setName(newName);
    if (!newName) {
      props.apiCall();
    } else {
      const filteredData = props.data.filter(cliff => cliff.name.toLowerCase().includes(newName.toLowerCase()));
      props.setData(filteredData);
    }
  };

  const handleDifficulty = (event) => {
    props.setDifficulty(event.target.value)
    if (event.target.value === 'Pro') {
      props.setData(props.allCliffs.filter(cliff => cliff.maxHeight > 60))
    } else if (event.target.value === 'Having Fun') {
      props.setData(props.allCliffs.filter(cliff => cliff.maxHeight <= 60 && cliff.maxHeight >= 40))
    } else if (event.target.value === 'Newbie'){
      props.setData(props.allCliffs.filter(cliff => cliff.maxHeight < 40))
    } else {
      props.setData(props.allCliffs)
    }
  }

  return (
    <div className='filter-container'>
      <div className='filter-name-container'>
        <label htmlFor='name'>Filter by name</label>
        <input
          className='filter-name-state'
          type='text'
          name='name'
          value={props.name}
          onChange={event => handleName(event)}
        />
      </div>
      <div className='dropdown'>
        <label htmlFor=''>Filter by difficulty:</label>
        <select
          className='dropdown-difficulty'
          type='text'
          name='difficulty'
          value={props.difficulty}
          onChange={event => handleDifficulty(event)}
        >
          <option value='Show All'>Show All</option>
          <option value='Newbie'>Newbie</option>
          <option value='Having Fun'>Having Fun</option>
          <option value='Pro'>Pro</option>
        </select>
      </div>
    </div>
  )
}

Filter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
}

export default Filter;
