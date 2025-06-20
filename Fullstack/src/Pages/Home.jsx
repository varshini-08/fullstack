import React from 'react'
import Welcome from '../Welcome'
import Skills from '../Skills'

const Home = () => {
  return (
    <div>
        <h1>Home page</h1>
         <Welcome name='GOPI' country='INDIA'/>   
         <Skills skill={['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']} />
         <h1>Welcome</h1>
    </div>
  )
}

export default Home
