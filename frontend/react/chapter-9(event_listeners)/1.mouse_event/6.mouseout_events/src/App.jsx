function App(){

  function print(){
    console.log("this is dblclick button")
  }


  return(
    <button onMouseOut={print}>click me</button>
  )
}

export default App