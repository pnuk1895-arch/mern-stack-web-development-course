function App(){

  function print(){
    console.log("this is press button")
  }


  return(
    <button onMouseDown={print}>click me</button>
  )
}

export default App