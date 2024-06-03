import { useState } from 'react'

import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <MainContainer />
      <Footer />
    </>
  )
}

export default App
