import {useState} from "react"

function App(){

    const [value, setValue]=useState("")

 const arr=[]
  function handleSubmit(e){
    e.preventDefault()    
    console.log(arr)  
  }
  function handleChange(e){
    
  }
  
  


  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="">enter your name</label>
      <input onChange={handleChange} type="text" placeholder="enter name" name="Name"/>
      <label htmlFor="">phone number</label>
      <input onChange={handleChange} type="number" placeholder="Phone number" name="Phone number" />
      <button type="submit">submit</button>
    </form>
  )
}


export default App