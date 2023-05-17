import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'
import photo from "../../assets/1.jpg"
import image from "../../assets/harsh.jpg"
import like  from "../../assets/like.png"
import heart from "../../assets/heart.png"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={image} alt="" className="postTopImg" />
                    <span className="topImgName">Harsh bindal</span>
                    <span className="topPostDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postIdea">Hey I am at srinagar!</span>
                <img src={photo} alt="" className="postCenterImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={like} alt="" className="likeButton" />
                    <img src={heart} alt="" className="likeButton" />
                    <span className="likeCounter">Liked by 15 people</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentText">3 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
