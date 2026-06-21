import secondClickBox1  from "./2.buttonBox1"
import secondClickBox2 from "./3.buttonBox2"
import { useState } from "react"

function Calculator({number}){
    
    const [value, setValue]=useState("")
    const [firstValue, firstSetValue]=useState(null)
    const [operation, setOperation]=useState("")
    


    let clickButtonBox1=(e)=>{
    secondClickBox1(e,value,setValue,firstValue,firstSetValue, operation, setOperation)
    } 

    let clickButtonBox2=(e)=>{
        secondClickBox2(e,value,setValue)
    }

    return(
        <div className="calculator">
            {/* input box */}
            <input type="text" placeholder="0" className="input" value={value} readOnly />

            <div className="buttonsBox">
                {
                    number.map((num, index)=>{
                            return <button onClick={clickButtonBox1} key={index} id={index}>{num}</button>
                    })
                }
            </div>
            <div className="buttonsBox2">
                    <button className="delete" onClick={clickButtonBox2}>Delete</button>
                    <button className="AC" onClick={clickButtonBox2}>AC</button>
            </div>
        </div>
    )
}

export default Calculator