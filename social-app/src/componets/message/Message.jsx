import "./message.css"
import navin from "../../assets/navin.jpg"

import moment from 'moment';

export default function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img src={navin} alt="not found" className="messagePhoto"></img>
            <p className="messageText" >{message.text}</p>
        </div>
        <div className="messageBottom">
            <span>{moment(message.createdAt).fromNow()}</span>
        </div>
    </div>
  )
}
