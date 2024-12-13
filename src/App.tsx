import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './Titulo';
import NavBar from './components/header/NavBar';
import Fondo from './components/fondo/fondo';
import './App.css'
import Footer from './components/footer/footer';

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
