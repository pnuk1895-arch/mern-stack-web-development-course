// How do we fetch all documents?

const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()
const { student }= require("./model/student")

async function mongoDB()
{
    try {
        await mongoose.connect(process.env.mongoDb_cloud)

        const Student= await student.find() 
        console.log(Student)

    } catch (error) 
    {
        console.log(`error while connected to the mongoDB ${error}`)
    }
}
mongoDB()