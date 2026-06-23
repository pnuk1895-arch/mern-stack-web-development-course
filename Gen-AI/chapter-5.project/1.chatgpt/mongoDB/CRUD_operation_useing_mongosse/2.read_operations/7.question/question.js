// How do we find students by roll no?

const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()
const { student }= require("./model/student")

async function mongoDB(){
try {
        await mongoose.connect(process.env.mongoDb_cloud)

        const Student= await student.find({
            "roll no" : 23
        })
        console.log(Student)
} catch (error) {
    console.log(`error while connected to ${error}`)
}
}
mongoDB()