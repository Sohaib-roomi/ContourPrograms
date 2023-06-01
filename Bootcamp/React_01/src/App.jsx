import { useState } from 'react'

import Header from "./Header"
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tabahi Code</h1>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
