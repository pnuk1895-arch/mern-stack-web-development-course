const signUpClass = require("../model/signUpModel")
const bcrypt = require("bcrypt")
const genToken = require("../config/generating.token")

async function submitSignUp(req, res) {
    console.log(req.body)
    //get a signup register data
    let { userName, password, email, confirmPassword } = req.body

    // step:2 we have to validate data before save in databse
    // 1. basic Validation
    if (!userName || !email || !password || !confirmPassword) {
        return res.status(400).json(
            {
                success: false,
                message: "all fields are required"
            }
        )
    }

    //2.Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json(
            {
                success: false,
                message: 'Please enter a valid email (e.g., user@example.com).'
            }
        )
    }
    //3.Password strength: min 8 chars, at least one uppercase, one lowercase, one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(404).json(
            {
                success: false,
                message: 'Password must be at least 8 characters and include uppercase, lowercase, and a number.'
            }
        )
    }

    // 3.matching password validation
    if (password !== confirmPassword) {
        return res.status(400).json(
            {
                success: false,
                message: "passwords do not match."
            }
        )
    }



    try {
        // step-03 if every thing is okay then check user already exist or not 
        const existUser = await signUpClass.findOne({ email })
        if (existUser) {
            return res.status(400).json({ success: false, message: "user is already exist please login" })
        }
    } catch (error) {
        console.log("while find the document of user:", error.stack)
        return res.status(500).json(
            {
                success: false,
                message: "some thing went wrong please try later"
            }
        )
    }
    // step-04 encrypt the password
    let hassPassword1 = await bcrypt.hash(password, 10)

    let hassPassword2 = await bcrypt.hash(confirmPassword, 10)

    const signUpData = new signUpClass(
        {
            userName: userName,
            passWord: hassPassword1,
            confirmPassword: hassPassword2,
            email: email
        }
    )

    try {
        let signUpDocument = await signUpData.save()

        // generate a token 
        let result = await genToken(signUpDocument._id)
        if (result.success === true) {
            res.cookie("token", result.message,
                {
                    httpOnly: true,
                    secure: process.env.node_environment === "production",
                    sameSite: "strict",
                    maxAge: 7 * 24 * 60 * 60 * 1000
                }
            )


            res.status(200).json(
                {
                    success: true,
                    message: "you have successfully  Sign Up. Please log in"
                }
            )

            return
        }

        console.log("error while generating a token", result.message)

        res.status(404).json(
            {
                success: false,
                message: "oops something went wrong please try later"
            }
        )
    } catch (error) {
        console.log("while saving the signup data:", error)
        return res.status(500).json(
            {
                success: false,
                message: "oops something went wrong please try later"
            }
        )
    }


}


async function submitLogin(req, res) {


    try {
        
        //   getting a client login form data 
    
        const { password, email } = req.body
    
        // step:2 we have to validate data before save in databse
    
        // step:2 we have to validate data before save in databse
        // 1. basic Validation
        if ( !email || !password ) {
            return res.status(400).json(
                {
                    success: false,
                    message: "all fields are required"
                }
            )
        }
    
    
        // applying validation to chek wheatehr the client data in in correct fomat or not
        //2.Email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Please enter a valid email (e.g., user@example.com).'
                }
            )
        }
    
        //3.Password strength: min 8 chars, at least one uppercase, one lowercase, one number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(404).json(
                {
                    success: false,
                    message: 'Password must be at least 8 characters and include uppercase, lowercase, and a number.'
                }
            )
        }
    
    
        const currentUser= await signUpClass.findOne({email})
    
        if(!currentUser)
        {
              return res.status(404).json({success:false,message:"user does't exist with this email please Signup "})
        }
    
        // password should be match
    
        const savePassword=currentUser.password
        
        const isCorrect= bcrypt.compare(password,savePassword)
        if(isCorrect)
        {    
              // generate a token 
            let result = await genToken(currentUser._id)
            if (result.success === true) {
    
                res.cookie("token", result.message,
                    {
                        httpOnly: true,
                        secure: process.env.node_environment === "production",
                        sameSite: "strict",
                        maxAge: 7 * 24 * 60 * 60 * 1000
                    }
                )
              
             res.status(200).json({success:true,message:"you have successfully loged in"})
        }else{
            return res.status(400).json({success:false,message:"password doesn't match"})
        }
    }
    }catch (error) {
         console.log(error)
         return res.status(500).json({success:false,message:"internal server error"})  
          }    




}

module.exports = {
    submitSignUp,
    submitLogin
}