import '../styles/App.css';
import Nav from './Nav'
import Filter from './Filter'
import CardContainer from './CardContainer'
import { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

const App = () => {
  const [data, setData] = useState([])
  const [difficulty, setDifficulty] = useState('')
  const [name, setName] = useState('')
  const [favPage, setFavPage] = useState(false)

  const apiCall = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/v1/cliffs", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.cliffs))
      .catch(error => console.log(error, 'error'))
    }

    const goToFav = () => {
      setFavPage(true)
    }

    useEffect(() => {
      apiCall()
    }, [])

  return (
    <div className="app">
      <Nav goToFav={goToFav}/>
      <Route path='/' render{() => <Filter
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        name={name}
        setName={setName}
        data={data}
        setData={setData}
        apiCall={apiCall}
      />}
      <Route path='/' render{() => <CardContainer data={data}/>}
    </div>
  )
}

export default App;
