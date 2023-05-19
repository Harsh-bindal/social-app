import React from 'react'
import "./login.css"

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
                <input placeHolder="Email" className="loginSet" />
                <input placeholder="Password" className="loginSet" />
                <button className="loginButton">LogIn</button>
                <span className="passwordForgot">Forgot password?</span>
                <button className="registerButton">Register to New Account</button>
             </div>
            </div>


        </div>
    </div>
  )
}
