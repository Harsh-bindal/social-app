import "./chatOnline.css"
import { useState,useEffect } from "react";
import axios from "axios"
import avatar from "../../assets/avatar.png"



export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/user/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversation/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline" >
      {onlineFriends.map(o=>(

    <div className="chatOnlineFriend" onClick={() => handleClick(o)} >
        <div className="imgContainer">
            <img  src={  o?.profilePicture? PF + o.profilePicture :avatar} alt="error" className="chatOnlineImg" ></img>
            <div className="imgBadge"></div>
        </div>
        <span className="chatOnlineName">{o?.name}</span>
    </div>
      ))}
</div>
  )
}
