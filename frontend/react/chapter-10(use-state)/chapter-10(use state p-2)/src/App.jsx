import { useState } from "react"

function App()
{
      let stateArray=useState(0)
      let state=stateArray[0]
      let stateMethod=stateArray[1]
      
      function increase()
      {
           stateMethod(state + 1)
           console.log(state)          
      }
    return (
      <>
      <h1>count={state}</h1>
      <button onClick={increase}>increase</button>

      </>
    )
}


export default App

