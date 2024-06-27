import { useEffect, useState } from "react"
import { api } from "./services/api"


function App() {
  
const [pokemons, setPokemons] = useState([])
  
useEffect(() => {
  api.get("/pokemon").then(response => setPokemons(response.data.results)).catch(error => console.log('error',error))
}, [] )

  return (
    <>
      <h1 >
        Pokemons:
      </h1>

{ pokemons.map( (pokemon) => <li key = { pokemon.name }>{ pokemon.name }</li>) }


    </>
  )
}

export default App
