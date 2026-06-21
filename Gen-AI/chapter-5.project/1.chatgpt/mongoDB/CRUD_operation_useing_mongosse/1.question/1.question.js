//  How do we insert one document?

const moongoos=require("mongoose")
const dotenv=require("dotenv")
const {student}=require("./model/student")

dotenv.config()



async function mongoDBConnection(){
    try {
            await moongoos.connect(process.env.mongoDB_cloud)
            //  console.log("successfully connected with mongoDB")



            const studentObj = new student({
                name:"priyanshu negi",
                age:13,
                course:"mern stack",
                email:"marn@gmail.com"
            })

            await studentObj.save()

            console.log("succussfully save the data in the mongoDB cloud")
    } catch (error) {
          console.log(`error while connecting with mongoDB cloud: ${error}`) 
    }   
 
   
}
mongoDBConnection()
