import React from 'react'
import { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
     const handingIncrement=()=>{
         setCount(count+1)
     }
     const handingLikes=()=>{
        setLikes(count+1)
     }
     const handingDisLikes=()=>{
        setLikes(count+1)
     }

  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Likes: {likes}</h1>
      <h1>Dislikes: {dislikes}</h1>

      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setLikes(count+1)}>Likes</button>
      <button onClick={()=>setDislikes(count+1)}>Dislikes</button>
    </div>
  )
}

export default State
