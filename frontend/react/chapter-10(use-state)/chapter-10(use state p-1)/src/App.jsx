function App()
{
      let count=0

      function increase()
      {
           count++
           console.log(count)
      }
    return (
      <>
      <h1>count={count}</h1>
      <button onClick={increase}>increase</button>

      </>
    )
}


export default App


//here we are changing the value of count variable which is a js variable, but we click on the button to change the value of variable so react doesn't identify it. 
// we will solve it in the seconf file using usestate 