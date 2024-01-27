import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Bottom from './components/Bottom'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <About />
      <Bottom />
      <Footer />
    </>
  )
}

export default App
