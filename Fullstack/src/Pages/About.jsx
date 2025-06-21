import React, { useContext } from 'react'
import State from '../hooks/State'
import {Link} from 'react-router-dom'
import Form from '../hooks/Form'
import Effect from '../hooks/Effect'
import { UserContext } from '../hooks/UserContext'

const About = () => {
  const { name, arr,User } = useContext(UserContext);  
  return (
    <div>
      <h1>Hi, {name} </h1>
      <h1>{arr}</h1>
      <h1>User</h1>
      <p>{User.name}</p>
      <p>{User.age}</p>
      <p>{User.dep}</p>
      <Link to='/state'>Usestate example</Link><br/>
        <Link to='/form'>Controlled form</Link><br />
        <Link to='/effect'>Effect</Link>
     
    </div>
  )
}

export default About