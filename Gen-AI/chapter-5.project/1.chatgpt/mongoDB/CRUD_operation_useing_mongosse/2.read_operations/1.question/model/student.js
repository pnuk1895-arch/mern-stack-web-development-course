const mongoose= require("mongoose")

const studentSchema= new mongoose.Schema({
    name:String,
    class:Number,
    roll_no:Number,
    stream:String

})


const student= mongoose.model( "student", studentSchema)

module.exports= {student}

