import { useState } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState('Put The GOD First')

  const getRandomQuotes = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random').then((response) => response.json())
      setQuotes(response.content)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className='wrapper'>
      <div className="card">
        <p>{quotes}</p>
        <button onClick={getRandomQuotes}>Generate</button>
      </div>
    </div>
  )
}

export default App
