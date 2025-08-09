// Step 1: Accept `fetchJoke` as a prop

const FetchButton = ({ fetchJoke }) => {
  return (
    // Step 2: Add an onClick event that calls `fetchJoke`
    <button onClick={fetchJoke} className="fetch-button">Get a New Joke</button>
  )
}

export default FetchButton
