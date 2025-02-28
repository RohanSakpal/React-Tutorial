import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './intro'

function App() {
  const username = 'Rohan'
  return (
    <>
      <h1>Introduction of ReactJS By {username}</h1>
      <Intro />
    </>

  )
}

export default App
