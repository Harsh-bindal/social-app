import React from 'react'
import "./profile.css"
import Topbar from "../../componets/topbar/Topbar"
import Leftbar from "../../componets/leftBar/Leftbar"
import Rightbar from "../../componets/rightbar/Rightbar"
import Feed from "../../componets/feed/Feed"
import cover from "../../assets/back1.jpg"
import img from "../../assets/photo.jpg"
import ProfileRightbar from '../../componets/profileRightBar/ProfileRightbar'

export default function Profile() {
  return (
    <>

        <Topbar/> 

    <div className="profile">

        <Leftbar/>
 

    <div className="rightSide">

        <div className="rightSideTop">
            <div className="profileCover">
            <img src={cover} alt="" className="profileCoverImg" />
            <img src={img} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <div className="profileName">Harsh bindal</div>
                <div className="profileDesc">Hey what's up!</div>
            </div>
        </div>

        <div className="rightSideBottom">
            <Feed/>
            <ProfileRightbar/>
        </div>

    </div>


  </div>

   

  

</>
  )
}
