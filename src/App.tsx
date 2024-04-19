import { useState } from 'react'
import './App.css'
import Nav from './components/screens/Nav'
import Hero from './components/screens/Hero'
import Slides from './components/screens/Slides'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      {/* <Slides/> */}
    </>
  )
}

export default App
