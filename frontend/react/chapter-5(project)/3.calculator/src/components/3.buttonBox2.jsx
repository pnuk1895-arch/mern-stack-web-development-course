
export default function secondClickBox2(e,value,setValue){
    if(e.target.innerText=="Delete")
    {
        setValue("")
    }
    if (e.target.innerText == "AC")
    {
        setValue(value.slice(0, -1))
    }
}

