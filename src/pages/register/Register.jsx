import React from 'react'
import "./register.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">

            <div className="loginLeft">
                <h3 className="appName">Social App</h3>
                <span className="descApp">Connect with this world And be social!</span>
            </div>


            <div className="loginRight">
             <div className="loginRightContainer">
                <input placeholder="UserName" className="loginSet" />
                <input placeHolder="Email" className="loginSet" />
                <input placeholder="Password" className="loginSet" />
                <input placeholder="Password Again" className="loginSet" />
                <button className="signUpButton">Sign Up</button>
                <button className="registerButton">Log into  Account</button>
             </div>
            </div>


        </div>
    </div>
  )
}
