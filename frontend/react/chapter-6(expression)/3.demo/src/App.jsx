function App()
{  
    const items=["daal","chini","chawal","maqngo"]
    const listItem=[]
      items.forEach((item)=>[
             listItem.push(<li>{item}</li>) 
      ])
     return(
      <>
         <h1>food  items</h1>

         <ul>
               {listItem} 
         </ul>
      </>
     )
}


export default App