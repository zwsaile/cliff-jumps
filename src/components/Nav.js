import '../styles/Nav.css';

const Nav = (props) => {
  return (
    <div className='nav'>
      <div className='logo-title'>
        <img className='nav-logo' src='../assets/lake-logo.png' alt='a red circular logo with a white drawing of a hill with two trees overlooking a lake'/>
        <h1 className='nav-title'>Send It</h1>
      </div>
      <button className='fav-spot-btn' onClick={props.goToFav}>Fav Spots</button>
    </div>
  )
}

export default Nav;
