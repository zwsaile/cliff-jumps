import '../styles/Nav.css';
import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({favs}) => {
  const counterRef = useRef(null);

  const [onFav, setOnFav] = useState(true)

  const swapToHomeButton = () => {
    setOnFav(false)
  }

  const swapToFavButton = () => {
    setOnFav(true)
  }

  useEffect(() => {
    if (counterRef.current) {
      counterRef.current.classList.add("ripple-active");
      setTimeout(() => {
        counterRef.current.classList.remove("ripple-active");
      }, 1000);
    }
  }, [favs.length]);

  return (
    <div className='nav'>
      <div className='logo-title'>
        <img className='nav-logo' src='../assets/lake-logo.png' alt='A red circular logo with a white drawing of a hill with two trees overlooking a lake'/>
        <h1 className='nav-title'>Send It</h1>
      </div>
      <div className='fav-btns'>
        {onFav ?
          <NavLink to='fav-spots'><button className='fav-spot-btn' onClick={swapToHomeButton}>Fav Spots</button></NavLink> :
          <NavLink to='/'><button className='fav-spot-btn' onClick={swapToFavButton}>Home</button></NavLink>
        }
          <p ref={counterRef} className='fav-spot-counter' tabIndex="0">
            {favs.length > 0 ? favs.length : ''}
          </p>
      </div>
    </div>
  )
}

export default Nav;
