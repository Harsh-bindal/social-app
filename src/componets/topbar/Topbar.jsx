import React from 'react'
import "./topbar.css"
import { Search,Person,Notifications,Chat } from '@mui/icons-material'
import harsh from "../../assets/harsh.jpg"

export default function Topbar() {
  return (
    
   
    <div className="topbarContainer">

     <div className="topbarLeft">
      <span className="logo">Social-app</span>
     </div>

      <div className="topbarCenter">
        <div className="searchBarIcon">
        <Search className="searchIcon" />
        <input placeholder="search for friends" className='searchInput'></input>
        </div>
      </div>


      <div className="topbarRight">

        <div className="topBarLink">
       <span className="topBarLink">New social</span>
       <span className="topBarLink">Time line</span>
        </div>

<div className="topBarIcons">
        <div className="topBarIconItem">
          <Person />
          <span className="iconBadge">1</span>
        </div>

        <div className="topBarIconItem">
          <Chat />
          <span className="iconBadge">1</span>
        </div>
        
        <div className="topBarIconItem">
          <Notifications />
          <span className="iconBadge">1</span>
        </div>
      </div>

      <img src={harsh} alt="" className="topBarimage" />

    </div>
</div>


  )
}
