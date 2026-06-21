function App(){

  function print(){
    console.log("this is dblclick button")
  }


  return(
    <button onMouseMove={print}>click me</button>
  )
}

export default App