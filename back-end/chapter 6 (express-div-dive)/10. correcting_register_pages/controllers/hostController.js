const path=require("path")
const Home=require("../model/RegisterModel.js")


function registerForm(req,res){
 const registerPath=path.join(__dirname,"../view/host/register.html")

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
    console.log(req.body)
    let homeData= new Home(req.body)

    homeData.save((error)=>{
        if(error)
        {
            console.log(error)
        }
        else
        {
            console.log("data save successfully")

            const submitPath=path.join(__dirname,"../view/host/submit.html")
            res.sendFile(submitPath,(error)=>{
                if(error)
                {
                    console.log(error)
                }
                else
                {
                    console.log("submit pages landed successfully")
                }
            })
        }
    })

    
}

module.exports={
        registerForm,
        addRegisterFormData}


