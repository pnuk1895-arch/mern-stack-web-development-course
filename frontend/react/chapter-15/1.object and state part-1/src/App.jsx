function App()
{
  const object ={name:"shahid",age:24}

  let arr=["priyanshu","shahid","sahil","ram","rudra","shivani","shubham","vishal","vijay","hamza"]
  function changeName()
  {
      let randomIndex= Math.floor(Math.random()*arr.length)
        object.name=arr[randomIndex]
        console.log(object.name)

  }



   return (

    <>
    <p>name:{object.name}</p>
    <button onClick={changeName}>Change name</button>
  

    </>
   )
}


export default App


// problem is that we are updating a value of existing object 
// changing a value of object doen't means we are changing a object 
// that's why we are not actually changing the avlue of stsate variuable
//tha't why componenent rerender nahi ho raha hain
//jiske wajah se updated ui nahi show ho raha hain