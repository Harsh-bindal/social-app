import React from 'react'
import "./closeFriends.css"
import sachin from "../../assets/photo1.jpg"

export default function CloseFriends({user}) {
  return (
    <li className="sideBarFriend">
    <img className="sideBarImage" src={sachin} alt="" />
      <span className="sideBarFriendName">{user.userName}</span>
    </li>
  )
}
