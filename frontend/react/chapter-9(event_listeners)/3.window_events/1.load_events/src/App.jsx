function App(){

  let boxes=[]

for( let i=1; i<=10; i++ )
{
  boxes.push(
    <div
    key={i}
    style={{
      backgroundColor:"blue",
      height:"50px",
      width:"50px",
      border:"2px solid black"
    }}
    ></div>
  )

  window.onload=function (){
    console.log("window is load")
  }


}


  return(
    <div>{boxes}</div>
  )
}
export default App