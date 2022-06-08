import '../styles/Filter.css';

const Filter = (props) => {

  const handleName = (event) => {
    props.setName(event.target.value)
  }

  const handleDifficulty = (event) => {
    props.setDifficulty(event.target.value)
  }

  return (
    <div className='filter-container'>
      <div className='filter-name-container'>
        <label htmlFor='name'>Filter by name or by state:</label>
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

export default Filter;