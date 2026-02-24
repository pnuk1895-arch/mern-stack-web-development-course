let fun2=()=>{
    console.log("i am function 2")
}

let fun1= ()=>{
   fun2()
}

let fun= ()=>{
    fun1()

}
fun()