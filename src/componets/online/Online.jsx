import React from 'react'
import "./online.css"
import Navin from "../../assets/navin.jpg"

export default function Online({user}) {
  return (
    
          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src={Navin} alt="" className="profileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="userName">{user.userName}</span>
          </li>
    
  )
}
