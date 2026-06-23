// How do we find a document by ID

const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()
const { student }= require("./model/student")

async function mongoDB()
{
    try {
        await mongoose.connect(process.env.mongoDb_cloud)

        const Student= await student.findById(
            "6a37c1f99af2e9f1fc03d0c5"
        ) 
        console.log(Student)

    } catch (error) 
    {
        console.log(`error while connected to the mongoDB ${error}`)
    }
}
mongoDB()