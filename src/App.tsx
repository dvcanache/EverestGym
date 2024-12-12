import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './Titulo';
import NavBar from './components/NavBar';
import Fondo from './components/fondo';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        
        <NavBar></NavBar>
        <Fondo></Fondo>
    </>
  )
}

export default App
