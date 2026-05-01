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

function booking(req,res){

       const bookingDataPath=path.join(__dirname,"../model/database/bookingData.json")

       Home.fetch(bookingDataPath,(error,filedata)=>{
              if(error){
                     console.log("error while fetching a booking data:",error)
              }
              else{
                     if(filedata && filedata.trim() == "")
                     {
                            let home=[]
                            res.render("booking",{home})
                            return
                     }
                     else{
                            let data=JSON.parse(filedata) 
                            res.render("booking",{data})
                     }
              }
       })
}

function favourite(req,res){

       const Path=path.join(__dirname,"../model/database/favouriteData.json")
       Home.fetch(Path,(error,filedata)=>{
            if(error)
              {
              res.send("something went wrong. Please try again later")
              console.log(error)
              }
              else
              {     
              
                      if(filedata && filedata.trim() == "")
                     {    
                            let data=[]
                            res.render('home',{data})
                          return 

                     }
                     let data=JSON.parse(filedata)
                    
                     res.render("favourite",{data})
              }
       })
}

function hostHomeList(req,res){

       const hostHomeListPath=path.join(__dirname,"../view/user/hostHomeList.html")

         res.sendFile(hostHomeListPath,(error)=>{
              if(error){
                     console.log(error)
              }
              else{
                     console.log("hostHomeList page landed successfully")
              }
       })

}

function homeDetails(req,res){

       console.log(req.params)
       const filePath=path.join(__dirname,"../model/database/registerData.json")
       Home.fetch(filePath,(error,data)=>{
              if(error)
              {
                     console.log("error while fetching a homedetails:",error)
                     res.send("oops something went wrong")
              }
              else{
                     // parsing data
                     let homes=JSON.parse(data)

                     // we have to apply a loop to fetch a patrculat object from the list of object
                     for(const home of homes)
                     {
                            if(req.params.id==home._id)
                            {
                                   res.render("homeDetails",{home})
                                   return
                            }
                     }

                     res.send("requestes home detalis not found")
              }

       })
}


module.exports={
       getHome,
       booking,
       favourite,
       hostHomeList,
       homeDetails

}