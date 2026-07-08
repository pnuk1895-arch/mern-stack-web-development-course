const mongoose=require("mongoose")

const signUpSchema= mongoose.Schema(
    {
        userName:{
            type:String,
            required:true
        },
        passWord:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        confirmPassword:{
            type:String,
            required:true
        }

    }
)
const signUpClass=mongoose.model("signUpCollection", signUpSchema)

module.exports=signUpClass