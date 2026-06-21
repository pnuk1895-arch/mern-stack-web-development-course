import {useState} from "react"

function App()
{ 
  const [obj, setObj]=useState({name:"shahid",age:24})
  let arr=["priyanshu","shahid","sahil","ram","rudra","shivani","shubham","vishal","vijay","hamza"]
  
  function changeName()
  {      
    let randomIndex= Math.floor(Math.random()*arr.length)
    let newName=arr[randomIndex]
    let newObj={...obj,name:newName}
    
    setObj(newObj)
    console.log(obj.name)
  
  }
   return (
    <>
    <p>name:{obj.name}</p>
    <button onClick={changeName}>Change name</button>
    </>
   )
} 
  
  
export default App


                                                                                                          