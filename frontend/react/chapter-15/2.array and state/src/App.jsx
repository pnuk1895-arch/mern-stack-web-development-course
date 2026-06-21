import { useEffect, useState } from "react"

function App()
{

    const [fruits,setFruits]= useState(["apple","banana","orange"])
    
    const randomF=["avacado", "mango", "pineapple", "pomegranede"]

   function addFruits()
    {
       let randomIndex=Math.floor(Math.random()*randomF.length)
      let newFruits=randomF[randomIndex]
       let arr=[...fruits,]
       arr.push(newFruits)
       setFruits(arr)//asynch code(time taking )
      }

  useEffect(()=>{
      console.log(fruits)
  },[addFruits])


  return(

    <>
          <h1>my fruites</h1>
          <ul>
              {fruits.map((fruit)=>{
                  return <li>{fruit}</li>
              })}
          </ul>

          <button onClick={addFruits}>add new fruits</button>
    </>
  )
}


export default App