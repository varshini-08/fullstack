import React, { useState } from 'react';

const Form = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        department:''
    })
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }))
  }
    const handleSubmit=(e)=>{
         e.preventDefault()
         console.log(formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>Name: </label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} /><br /><br />
            <label htmlFor="">Email: </label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} /><br /><br />
            <label htmlFor="">Password:</label>
            <input type="password" name='password' value={formData.password} onChange={handleChange} /><br /><br />
            <label htmlFor="">Department:</label>
            <input type="text" name='department' value={formData.department} onChange={handleChange} />
        </form>
    </div>
  )
}

export default Form
