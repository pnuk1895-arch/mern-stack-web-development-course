


function secondClickBox1(
      e,
      value,
      setValue,
      firstValue,
      firstSetValue,
      operation, 
      setOperation)
      {

      if( /[0-9.]/.test(e.target.innerText) )
      {
        setValue(value + e.target.innerText)  
        console.log(value) 
      }

       else if(e.target.innerText == "/" || e.target.innerText == "*" || e.target.innerText == "-" || e.target.innerText == "+" )
      {
        firstSetValue(parseFloat(value))
        setOperation(e.target.innerText)
        setValue("")
      }
      else if(e.target.innerText === "=")
      {
        const secondValue= parseFloat(value)

        if(operation === "/")
        {
          let result= firstValue / secondValue

          setValue(result.toString())
        }
        else if(operation === "*")
        {
          let result= firstValue * secondValue

          setValue(result.toString())
        }
        else if(operation === "-")
        {
          let result= firstValue - secondValue

          setValue(result.toString())
        }
        else if(operation === "+")
        {
          let result= firstValue + secondValue

          setValue(result.toString())
        }
      }
}


export default secondClickBox1