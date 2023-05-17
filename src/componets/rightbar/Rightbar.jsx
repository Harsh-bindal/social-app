import React from 'react'
import "./rightbar.css"
import gift from "../../assets/gift.png"
import ad from "../../assets/ad.webp"
import Navin from "../../assets/navin.jpg"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src={gift} alt="" className="birthdayGift" />
          <span className="birthdayText"><b>Navin</b> and <b>3 others</b> Have birthday today </span>
        </div>
        <img src={ad} alt="" className="rightbarAdd" />

        <h4 className="onlineSection">Online Friends</h4>
        <ul className="onlineFriendList">

          <li className="onlineFriend">
            <div className="profileImgContainer">
              <img src={Navin} alt="" className="profileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="userName">Navin Bindal</span>
          </li>

        </ul>

      </div>
    </div>
  )
}
