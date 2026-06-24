//creating a server with exrpess


//importing express(external module)
const express=require("express")//it return a function

const app=express()//running  this function give object
console.dir(app)


// step-02:middleware registration

//Global middleware (runs for every request)
app.use((req, res, next) => {
    console.log("Middleware 1: performing task1");

    // You MUST call next() to move to next middleware/route
    next();
});


//Another middleware
app.use((req, res, next) => {
    console.log("Middleware 2:middlware performing task 2");
    next();
});
app.use((req, res, next) => {
    console.log("Middleware 3:middlware performing task 3");
    next();
});



//creating a server 
const port=4000
//it inernally create a server(using http module),as well as listen a upcomirequest
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`)

})