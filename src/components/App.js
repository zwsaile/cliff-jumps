import '../styles/App.css';
import Nav from './Nav'
import Filter from './Filter'
import CardContainer from './CardContainer'
import FavSpots from './FavSpots'
import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

const App = () => {
  const [data, setData] = useState([])
  const [difficulty, setDifficulty] = useState('')
  const [name, setName] = useState('')
  const [favs, setFavs] = useState([])

  const apiCall = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://cliff-api.onrender.com/api/v1/cliffs", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.cliffs))
      .catch(error => console.log(error, 'error'))
    }

    useEffect(() => {
      apiCall()
    }, [])

  return (
    <main className='app'>
      <Nav />
      <Route exact path='/'>
        <Filter
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          name={name}
          setName={setName}
          data={data}
          setData={setData}
          apiCall={apiCall}
        />
        <CardContainer data={data} favs={favs} setFavs={setFavs}/>
      </Route>
      <Route exact path='/fav-spots'>
        <FavSpots favs={favs} setFavs={setFavs}/>
      </Route>
    </main>
  )
}

export default App;