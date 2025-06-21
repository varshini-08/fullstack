
import React, {useReducer} from 'react'
let initialValue=0
let initialReact={like:0,dislike:0}

const counter=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'RESET':
            return 0
        default:
            return state
    }
}
const rev = (state,action)=>{
    switch(action.type){
        case 'LIKE':
            return {like:state.like+1,dislike:state.dislike}
        case 'DISLIKE':
            return {like:state.like,dislike:state.dislike-1}
            default:
            return state
    }
}
const Reducer = () => {
    const[count,dispatch]=useReducer(counter,initialValue)
    const[re,dispatc]=useReducer(rev,initialReact)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button> 
      <h1>Recount:</h1>
       <button onClick={()=>dispatc({type:"LIKE"})}>+{re.like}</button>
      <button onClick={()=>dispatc({type:"DISLIKE"})}>-{re.dislike}</button>
    </div>
  )
}

export default Reducer
