const mongoose= require("mongoose")


//step one we are defining here schema or dataType or dataStructure
const studentSchema= new mongoose.Schema(
    {
        name:String,
        age:Number,
        course:String,
        email:String
    }
)

const student =mongoose.model( "student" , studentSchema)

module.exports = {student}