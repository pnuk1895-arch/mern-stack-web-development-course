const Home=require("../model/model.js")
const path=require("path")


function getHome(req,res)
{      
       const Path=path.join(__dirname,"../model/database/registerData.json")
       Home.fetch(Path,(error,data)=>{
            if(error)
              {
              res.send("something went wrong. Please try again later")
              console.log(error)
              }
              else
              {      if(data && data.trim() == "")
                     {    let parse=[]
                          res.render('home',{parse})
                          return 

                     }
                     let parse=JSON.parse(data)
                     res.render("home",{parse})
              }
       })
       
}


module.exports=getHome