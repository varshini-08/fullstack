import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
import Skills from './Skills'
// import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About';
import Service from './Pages/Service';
import State from './hooks/State'
import Form from './hooks/form'; 
import Effect from './hooks/Effect'
import Reducer from './hooks/Reducer'

function App() {
  return (
    <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/effect' element={<Effect/>}/>
      <Route path='/reducer' element={<Reducer/>}/>
      </Routes>

    </>
  );
}

export default App;