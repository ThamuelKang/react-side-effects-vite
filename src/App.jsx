import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('An empty joke')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => response.json())
      .then(data => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  function getNewJoke() {
    setLoading(true)
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => response.json())
      .then(data => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={getNewJoke} />
    </div>
  )
}

export default App
