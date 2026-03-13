
function creategreeting_msg(name,callback){
    let greet= `hello ${name}`
    callback(greet)
}
 creategreeting_msg("priyanshu",(e)=>{
    console.log(e)
 })