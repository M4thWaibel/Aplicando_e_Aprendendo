import { useEffect, useState } from 'react'
import { api } from './services/api';
import './App.css'

function App() {

const [characters, setCharacters] = useState([])

useEffect(() => {
  api.get("/character").then(response => setCharacters(response.data.results)).catch(error => console.log(error))
});
  return (
    <>
      <h1>Rick and Morty </h1>
      <div>
        {characters.map((characters) => 
        <li key={characters.id} >
          <h2>{ characters.name}</h2> 
          <img src={characters.image}/>
        </li>)}
      </div>
    </>
  )
}

export default App
