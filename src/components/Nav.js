import '../styles/Nav.css';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  const [onFav, setOnFav] = useState(true)

  const hideButton = () => {
    setOnFav(false)
  }

  return (
    <div className='nav'>
      <div className='logo-title'>
        <img className='nav-logo' src='../assets/lake-logo.png' alt='a red circular logo with a white drawing of a hill with two trees overlooking a lake'/>
        <h1 className='nav-title'>Send It</h1>
      </div>
      <NavLink to='fav-spots'>
        {onFav && <button className='fav-spot-btn' onClick={hideButton}>Fav Spots</button>}
      </NavLink>
    </div>
  )
}

export default Nav;
