const path=require("path")
const {Home}=require("../model/model.js")


function registerForm(req,res){
 const registerPath=path.join(__dirname,"../view/register.html")

 res.sendFile(registerPath,(error)=>{
    if(error)
    {
        res.send("oops, something went wrong.")
        console.log(`register:${error}`)
    }
        
    else
    {
        console.log("register page landed successfully")
    }
}

)}

function addRegisterFormData(req,res)
{   
    // we have to save data in a array
        const homeData=new Home(req.body.homeName,req.body.pricePerNight,req.body.Location,req.body.rating,req.body.photourl)
       
        homeData.save()
    
    
        // now we have to give a successfull page so that user can know that data is successfully submited
    const addedPath=path.join(__dirname,"../view/submit.html")
    res.sendFile(addedPath,(error)=>{
        if(error)
        {
            res.send('oops, Something went wrong')
            console.log(`added:${error}`)
        }
        else
        {   
            console.log("submit files landed successfully")
        }
    })
}

module.exports={
    registerForm,
    addRegisterFormData,

}
