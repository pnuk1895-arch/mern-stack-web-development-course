const mongoose =require("mongoose")
const dotenv=require("dotenv")
dotenv.config()

async function mongoData(){
    try {
        // console.log(await mongoose.connect(process.env.mongoDB_cloud))
        console.log(process.env.mongoDB_cloud)

    } catch (error) {
        console.log(`error while connected to mongeDB: ${error}`)
    }
}
mongoData()
