import "./App.css"
import Calculator from "./components/1.Calculator"

function App(){

        const number=[  "7","8","9","/",
                        "4","5","6","*",
                        "1","2","3","-",
                        "0",".","=","+",
                    ]

    return(
        <Calculator number={number}/>
        
    )
}


export default App