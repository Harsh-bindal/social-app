import React from 'react'
import "./share.css"
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import harsh from '../../assets/harsh.jpg'

export default function Share() {
  return (
    <div className="Share">
      <div className="shareWrapper">
        <div className="shareTop">
        <img src={harsh} alt="" className="shareImg" />
        <input placeholder="what's in your mind harsh!" className="shareInput"></input>
        </div>

        <hr className="shareHr"></hr>



        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon"/>
              <span className="shareOptionText">photo Or video</span>
            </div>

            <div className="shareOption">
            <Room htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
            <Label htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>

          </div>
          <button className="shareButton">Share</button>

        </div>

      </div>
    </div>
  )
}
