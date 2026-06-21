function App(){

  function print(){
    console.log("this is button")
  }


  return(
    <button onMouseUp={print}>click me</button>
  )
}

export default App