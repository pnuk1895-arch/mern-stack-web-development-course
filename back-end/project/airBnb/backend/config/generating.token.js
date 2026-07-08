const jwt=require("jsonwebtoken")

async function genToken(userId){

    try{
        
        const token=await jwt.sign({userId},process.env.jwt_secret,{expiresIn:"7d"})
        return {success:true,message:token}
    }catch(error){
        
        return {success:false,message:error}
    
    }

}

module.exports=genToken