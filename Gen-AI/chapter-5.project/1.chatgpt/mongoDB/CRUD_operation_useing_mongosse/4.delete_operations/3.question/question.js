// How do we fetch all documents?


const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()
const { student }= require("./model/student")

async function mongoDB(){
try {
        await mongoose.connect(process.env.mongoDb_cloud)

        const Student= await student.findByIdAndDelete(
            '6a37c2ddad2c2194c1d95cac',
            {
                name : "priyanshu negi"
            }
        )
        console.log(Student)
} catch (error) {
    console.log(`error while connected to ${error}`)
}
}
mongoDB()