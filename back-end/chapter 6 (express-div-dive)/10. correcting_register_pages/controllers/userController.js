const Home=require("../model/RegisterModel.js")
const favouriteModel=require("../model/favouriteModel.js")
const path=require("path")


function getHome(req,res)
{      

       Home.fetchAll((error,data)=>{
            if(error)
              {
              res.send("something went wrong. Please try again later")
              console.log(error)
              }
              else
              {     
                     let parse=data
                     res.render("home",{parse})
              }
       }) 
}

function booking(req,res){

       // const bookingDataPath=path.join(__dirname,"../database/bookingData.json")

       // Home.fetchAll(bookingDataPath,(error,filedata)=>{
       //        if(error){
       //               console.log("error while fetching a booking data:",error)
       //        }
       //        else{
                     
       //        }
       // })
}

function storeFavourite(req, res) {

    // ✅ Make sure correct data is passed
    const favObject = new favouriteModel({
        Homeid: req.params.Homeid   // ensure param name matches route
    });

    favObject.save((error, message) => {

        if (error) {
            console.log(error);
            return res.status(500).json({"success":false,"message":message})
        }

        // ✅ message comes from model (duplicate OR success)
        return res.status(200).json({"success":true,"message":message});
    });
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
    
       Home.fetchAll((error,data)=>{
              if(error)
              {
                     console.log("error while fetching a homedetails:",error)
                     res.send("oops something went wrong")
              }
              else{

                     // we have to apply a loop to fetch a patrculat object from the list of object
                     for(const home of data)
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
       storeFavourite,
       hostHomeList,
       homeDetails

}