function App(){

  let input=document.querySelector("input")

  function print(e){
    console.log(e.key) //e.key for what key is press
    // console.log(e.target.value) //e.target.value for what value written in the input box.
  }


  return(
    <form action="">
      <input type="text" onKeyPress={print}/>
    </form>
  )
}

export default App