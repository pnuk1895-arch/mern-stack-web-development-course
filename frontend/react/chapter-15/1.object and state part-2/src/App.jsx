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


                                                                                                          
// how it work

// new object create hua
// new reference bana
// React re-render karega
// UI update hogi


// problem:
// state ko update kr ne wala method setState() ek asychronus fucntion hain,mtlb ye time leta hain state variable ki vaule ko update krne main 

// so jase ki hum jante hain ki jb bhi koi time taking task hota hain toh nodejs use backrgound main alag thread pe execute akrwata hain our immidiately next code ko execute krta hain 

// so yaha pe console.log(user.name) previus value ko hi prinit kare ga na ki current updated name ko kiyu ki object ka name abhi update nahi hua hain abbhi under process main hain

// agar current updated value dekhi nahi toh hame useeefect use krna chaiye.