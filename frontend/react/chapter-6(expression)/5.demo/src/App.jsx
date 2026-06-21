function App()
{  
      const fooditems=["daal","chini","mango"]

      return(
            <>
         <h1>food  items</h1>

         <ul>

               {
                  fooditems.map((item)=>{
                        return <li key={item}>{item}</li>
                  })
               }
                  
         </ul>
      </>
     )
}
export default App


// note :assign unique key for optimized rerender
