import React, { useState } from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'
import image from "../../assets/harsh.jpg"
import action  from "../../assets/like.png"
import heart from "../../assets/heart.png"
import {Users} from "../../dummyData"

export default function Post({post}) {

    const[like,setLike]=useState(post.like)
    const[isLiked,setIsLiked]=useState(false)

    const likeHandler=()=>
    {
       setLike(isLiked?like-1 : like+1)
       setIsLiked(!isLiked)
    }  

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={image} alt="" className="postTopImg" />
                    <span className="topImgName">{Users.filter((u)=>u.id===post.userId)[0].userName}</span>
                    <span className="topPostDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postIdea">{post?.desc}</span>
                <img src={require("../../assets/photo2.jpg")} alt="" className="postCenterImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={action} onClick={likeHandler} alt="" className="likeButton" />
                    <img src={heart} onClick={likeHandler} alt="" className="likeButton" />
                    <span className="likeCounter">Liked by {like} people</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
