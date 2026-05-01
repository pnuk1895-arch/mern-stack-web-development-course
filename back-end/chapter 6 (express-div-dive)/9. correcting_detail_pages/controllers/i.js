const Home=require("../model/model")
const path=require("path")

function booking(Id){
    const filepath=path.join(__dirname,"../model/database/homeDetail.json")

  Home.fetch(filepath,(error,data)=>{
    if(error)
    {
        console.log(error)
    }
    else
    {
       if(data && data.trim() === "")
       {
        const parse=[]
        console.log(parse)
       }
        else{
          const bookingDataParse=JSON.parse(data)
          for(let body of bookingDataParse){
            if(body._id == Id)
            {
              console.log(body)
            }
          }  
        }
    }
  })   
}
booking(2)