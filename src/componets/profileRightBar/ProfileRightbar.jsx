import React from 'react'
import gift from "../../assets/gift.png"
import ad from "../../assets/ad.webp"
import {Users} from "../../dummyData"
import Online from "../online/Online"
import "./profileRightbar.css"

export default function ProfileRightbar() {
  return (
   
    <div className="rightbar">
      <div className="rightbarWrapper">
       
       <h4 className="rightbarTitle">User Information</h4>

       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Jagnair</span>
        </div>

        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Agra uttar pradesh</span>
        </div>

        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
        </div>
       </div>

    <h4 className="rightBartitle">User Friends</h4>
       <div className="rightbarFollowings">
        <div className="rightbarFollowing">
            <img src={require("../../assets/person1.jpg")} alt="" className="followingProfile" />
            <span className="followingName">person1</span>
        </div>

        <div className="rightbarFollowing">
            <img src={require("../../assets/person2.jpg")} alt="" className="followingProfile" />
            <span className="followingName">person2</span>
        </div>

        <div className="rightbarFollowing">
            <img src={require("../../assets/person3.jpg")} alt="" className="followingProfile" />
            <span className="followingName">person3</span>
        </div>

        <div className="rightbarFollowing">
            <img src={require("../../assets/person4.jpg")} alt="" className="followingProfile" />
            <span className="followingName">person4</span>
        </div>

        <div className="rightbarFollowing">
            <img src={require("../../assets/person5.jpg")} alt="" className="followingProfile" />
            <span className="followingName">person5</span>
        </div>
       </div>


        
      </div>
    </div>
  )
}
