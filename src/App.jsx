import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='dark'>
        <div className="image">
          {/* <NavBar /> */}

        </div>
      </div>
    </div>
  )
}

export default App
