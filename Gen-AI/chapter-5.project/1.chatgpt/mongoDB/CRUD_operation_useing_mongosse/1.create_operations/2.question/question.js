//  How do we insert multiple documents?

const mongoose =require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const {student} =require("./model/student")

async function mongoData(){
    try {
         await mongoose.connect(process.env.mongoDB_cloud)
         console.log("mongoDb connected successfully")

        await student.insertMany(
            {
                name:"priyanshu negi",
                "roll no":23,
                class:12,
                stream:"arts" 
                
            },
            {
                name:"priyanshu negi",
                "roll no":23,
                class:12,
                stream:"arts"
            }
         )
 
    } catch (error) {
        console.log(`error while connected to mongeDB: ${error}`)
    }
}
mongoData()
