const mongoose=require("./mongoose")

let object= new mongoose("mumbai",1000,6)

let error=object.save()
if(error)
{
    console.log(error)
}
else
{
    console.log("data save successfully")
}


//there is a problem and prblem is that as we know that here save is a asynch task(time taking process) so we should print error or succesfull msg once the data has been saved in file 

//so for this we use call back function or asynch await 