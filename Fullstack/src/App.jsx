import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
import Skills from './Skills'
//import './App.css'

function App() {
  

  return (
    <>
      {/*<Welcome name="GOPI" country="India"/>*/}
      <Skills skill={['React','Node','Express','MongoDb']}/>
      <h1>vino</h1>
    </>
  )
}

export default App
