import "./Signup.css";
import { FaAirbnb, FaGoogle, FaFacebookF } from "react-icons/fa";
import {useState} from "react"
import {useNavigate,Link} from "react-router-dom"



const Signup = () => {
    
    const [error,setError]=useState("")
   const navigate= useNavigate()
    async function handleSubmit(e)
     {
          e.preventDefault()
          // getting a form data 

          const formObject=new FormData(e.target)
          const userName=formObject.get("userName")
          const password=formObject.get("password")
          const confirmPassword=formObject.get("confirmPassword")
          const email=formObject.get("email")

          const formData={
               userName,
               password,
               confirmPassword,
               email
          }

          console.log("formData",formData)

          // api calll to send a form data 
         const api='http://localhost:3000/submit:signUp'
         try {
          
           const response =await fetch(api,{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })
  
            const data=await response.json()//collecting a chunk ,concatinate it,and do pasrsing
            console.log("data from server",data)
            if(!data.success)
            {
              setError(data.message)

            }

            else{
                navigate("/login")
            }

         } catch (error) {
             console.log(error)
         }

          

     }
  return (
    <div className="signup-page">
      <div className="signup-container">

        {/* Left Side */}
        <div className="left-panel">
          <div className="logo">
            <FaAirbnb />
            <span>airbnb</span>
          </div>

          <h1>Welcome to Airbnb</h1>

          <p>
            Join millions of travelers around the world. Discover unique homes,
            unforgettable experiences, and book your next adventure.
          </p>
        </div>

        {/* Right Side */}
        <div className="right-panel">
          <div className="signup-card">
            <p style={{color:"red"}}>{error}</p>

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

              <div className="input-box">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  name="userName"
                />
                
              </div>

              <div className="input-box">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="john@example.com"
                  name="email"
                />
              </div>


              <div className="input-box">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"

                />
              </div>

              <div className="input-box">
                <label>confirm Password</label>
                <input
                  type="password"
                  placeholder="confirm password"
                  name="confirmPassword"
                />
              </div>
              <button type="submit" className="signup-btn">
                Sign Up
              </button>

            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="social-btn">
              <FaGoogle />
              Continue with Google
            </button>

            <button className="social-btn">
              <FaFacebookF />
              Continue with Facebook
            </button>

            <p className="login-text">
              Already have an account?
              <Link to="/login">Log in</Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup