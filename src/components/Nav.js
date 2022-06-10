import '../styles/Nav.css';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  const [onFav, setOnFav] = useState(true)

  const swapToHomeButton = () => {
    setOnFav(false)
  }

  const swapToFavButton = () => {
    setOnFav(true)
  }

  return (
    <div className='nav'>
      <div className='logo-title'>
        <img className='nav-logo' src='../assets/lake-logo.png' alt='A red circular logo with a white drawing of a hill with two trees overlooking a lake'/>
        <h1 className='nav-title'>Send It</h1>
      </div>
        {onFav ?
          <NavLink to='fav-spots'><button className='fav-spot-btn' onClick={swapToHomeButton}>Fav Spots</button></NavLink> :
          <NavLink to='/'><button className='fav-spot-btn' onClick={swapToFavButton}>Home</button></NavLink>
        }

    </div>
  )
}

export default Nav;
