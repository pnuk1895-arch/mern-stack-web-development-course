import { useState,useEffect} from 'react'
function App()
{
          const[countx,setCountx]=useState(0)
          const [county,setCounty]=useState(0)
          const incCountx=()=>{
                setCountx(countx+1)
           }

          const incCounty=()=>{
                setCounty(county+1)
           }

    useEffect(()=>{
        console.log("useEffect called")
    },[countx,county])
  return(
    <div>
        <h1>Countx:{countx}</h1>
        <button onClick={incCountx}>Inc Countx</button>
        <h1>County:{county}</h1>
        <button onClick={incCounty}>Inc County</button>
    </div>
    
  )
}
export default App