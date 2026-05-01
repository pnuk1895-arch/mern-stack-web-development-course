const {Home}=require("../model/model.js")
function getHome(req,res)
{       const fakeDatabase=Home.fetchAll()
       res.render("home",{fakeDatabase})
}


module.exports=getHome