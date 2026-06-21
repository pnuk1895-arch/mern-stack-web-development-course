function App() {
  const isLogin=true
  return (
      <div>
         { isLogin ? <h1>Welcome User</h1>: <h1>Please Login</h1>}
       </div>
  )
}
export default App
// whenever you have to show a ui inside a html elment on the baises of condition then use ternary operator


//Ternary Operator ? :

//Sabse jyada use hota hai.

//Syntax: condition ? truePart : falsePart