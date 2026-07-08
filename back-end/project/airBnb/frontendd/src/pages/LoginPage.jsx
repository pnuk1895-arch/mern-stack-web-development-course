import "./LoginPage.css";
import {Link} from "react-router-dom"
import {
  FaAirbnb,
  FaGoogle,
  FaFacebookF,
  FaApple,
} from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    //  getting login form data 
     
     const [error,setError]=useState("")
    const navigate= useNavigate()

    async function handleSubmit(e)
     {
          e.preventDefault()
          // getting a form data 

          const formObject=new FormData(e.target)
          const email=formObject.get("email")
          const password=formObject.get("password")

          const formData={
               password,
               email
          }

          // console.log("formData",formData)

          // api calll to send a form data 
         const api='http://localhost:3000/login'
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
                navigate("/")
            }

         } catch (error) {
             console.log(error)
         }

  }
  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Side */}

        <div className="left-section">

          <div className="logo">
            <FaAirbnb />
            <span>airbnb</span>
          </div>

          <h1>Welcome Back!</h1>

          <p >
            Log in to continue exploring unique stays,
            amazing experiences, and unforgettable trips
            around the world.
          </p>

        </div>

        {/* Right Side */}

        <div className="right-section">

          <div className="login-card">

            <p style={{color:"red"}}>{error}</p>

            <h2>Log In</h2>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>

              <div className="input-group">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                />
              </div>

              <div className="options">

                <label className="remember">
                  <input name="rem" type="checkbox" />
                  Remember me
                </label>

                <a href="#">Forgot Password?</a>

              </div>

              <button type="submit" className="login-btn">
                Log In
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

            <button className="social-btn">
              <FaApple />
              Continue with Apple
            </button>

            <p className="signup-text">
              Don't have an account?
              <Link to="/signup"> Sign Up</Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;
