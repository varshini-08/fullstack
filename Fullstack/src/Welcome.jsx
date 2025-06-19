// import React from 'react'

// function Welcome() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Welcome
const Welcome = (props)=>{
    return (
        <div>
            <h1>Welcome : {props.name}</h1>
            <h1>Country : {props.country}</h1>
        </div>
    )
}
export default Welcome