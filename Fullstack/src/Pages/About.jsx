import React from 'react'
import State from '../hooks/State'
import { Link } from "react-router-dom"
const About = () => {
  return (
    <div>
        <Link to='/state'>UseState Example</Link><br /><br />
        <Link to='/form'>Controlled Form</Link><br></br><br />
        <Link to='/effect'>Useeffect</Link>
    </div>
  )
}

export default About
