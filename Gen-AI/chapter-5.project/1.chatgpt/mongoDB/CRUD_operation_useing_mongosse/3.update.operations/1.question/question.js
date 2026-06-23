//  How do we update one document?

const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()
const { student }= require("./model/student")

async function mongoDB(){
try {
        await mongoose.connect(process.env.mongoDb_cloud)

        const Student= await student.updateOne({
            name:"priyanshu negi"
        },
        {
            name:"mohan"
        }
    )
        console.log(Student)
} catch (error) {
    console.log(`error while connected to ${error}`)
}
}
mongoDB()