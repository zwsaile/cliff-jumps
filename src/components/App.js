import '../styles/App.css';
import Nav from './Nav'
import Filter from './Filter'
import CardContainer from './CardContainer'
import { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [difficulty, setDifficulty] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    apiCall()
  }, [])

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
      .then(result => setData(result))
      .catch(error => console.log('error', error));
    }

  return (
    <div className="app">
      <Nav />
      <Filter
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        name={name}
        setName={setName}
      />
      <CardContainer data={data} />
    </div>
  )
}

export default App;
