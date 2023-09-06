import "./messenger.css"
import Topbar from "../../componets/topbar/Topbar"
import Conversation from "../../componets/conversation/Conversation"
import Message from "../../componets/message/Message"
import ChatOnline from "../../componets/chatOnline/ChatOnline"
import {  useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useEffect } from "react"
import axios from "axios"
import { useContext } from "react"
import { io } from "socket.io-client";


export default function Messenger() {
    
    const[conversations,setConversations]=useState([]);
    const {user}=useContext(AuthContext);
    const [currentchat,setCurrentchat] =useState(null);
    const [messages,setMessages] =useState([]);
    const [newMessage,setNewMessage]=useState("");
    const scrollRef=useRef();
    const socket = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
          setArrivalMessage({
            sender: data.senderId,
            text: data.text,
            createdAt: Date.now(),
          });
        });
      }, []);
    
      useEffect(() => {
        arrivalMessage &&
          currentchat?.members.includes(arrivalMessage.sender) &&
          setMessages((prev) => [...prev, arrivalMessage]);
      }, [arrivalMessage, currentchat]);
    
      useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
          setOnlineUsers(
            user.followings.filter((f) => users.some((u) => u.userId === f))
          );
        });
      }, [user]);


    useEffect(()=>{
    const fetchConversations = async ()=>{
        try{

            const res=await axios.get("/conversation/"+user._id);
            setConversations(res.data);
       
        }catch(err)
        {
            console.log(err);
        }
    };
    fetchConversations();

    },[user._id]);


    useEffect(()=>{
     
     const getMessages= async ()=>{
        try{
            const res=await axios.get("/message/"+currentchat?._id);
            setMessages(res.data)
        }
        catch(err)
        {
            console.log(err);
        }
     }
     getMessages();
    },[currentchat?._id]);

    const handleChange = async (e)=>{
        e.preventDefault();

        const message ={
            sender:user._id,
            conversationId:currentchat._id,
            text:newMessage
        }
        const receiverId = currentchat.members.find(
            (member) => member !== user._id
          );
      
          socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
          });

        try{
           const res=await axios.post("/message",message);
           setMessages([...messages ,res.data])
           setNewMessage("");
        }
        catch(err)
        {
            console.log(err);
        }
    }

  useEffect(()=>{
  
    scrollRef.current?.scrollIntoView({behaviour:"smooth"});

  },[messages])



  return (
    <>
   <Topbar></Topbar>
    <div className="messenger">
        <div className="messengerUsers">
            <div className="messengerUsersWrapper">
            <input type="text" placeholder="Search here for friends!" className="searchUsers"></input>
             
             {conversations.map((c)=>(
                 <div onClick={()=>setCurrentchat(c)}> 
                 <Conversation key={c._id} conversation={c} currentUser={user} ></Conversation>
                    </div>       
             ))}
        
           
            </div>     
        </div>

        <div className="messengerBox">
            <div className="messengerBoxWrapper">
               {currentchat ? <>  <div className="chatBoxTop">
                {
                    messages.map((m)=>(
                        <div  ref={scrollRef}>

                            <Message message={m} own={m.sender === user._id} ></Message>
                        </div>
                    ))
                }
    
                </div>
                <div className="chatBoxBottom">
                    <textarea className="messageTextInput" onChange={(e)=>setNewMessage(e.target.value)} value={newMessage} placeholder="Enter text Here..." ></textarea>
                    <button className="messageSendButton" onClick={handleChange} >Send</button>
                </div></> : "Open a conversation for chat.."}
            </div>
        </div>
        <div className="messengerOnline">
            <div className="messengerOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentchat}
            />
            </div>
        </div>
    </div>
    </>
  )
}
