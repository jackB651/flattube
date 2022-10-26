import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";


function Channel({user, setWatch}){
  const [channelId, setChannelId] = useState({})
  const [channel, setChannel] = useState([])
  // console.log(user)
  useEffect(()=>{
    setChannelId(user.channel.id);
    fetch(`/channels/${1}`).then(r=>r.json()).then(data=>setChannel(data))
  },[])
  // console.log(channel)
  // const videoArray = channel.videos.map(video=>{
  //   // return(<h1>Somethging</h1>)
  // })
  //   return(<VideoCard video={video} setWatch={setWatch}/>)
    return(
        <div>
            <ul>
                <h2>{user.channel.title}</h2>
                <h4>Your Videos</h4>
                {/* {videoArray} */}
                <li>subscriptions</li>
                <li>videos from subscriptions</li>
                <button>New Video</button>
                <li>delete videos</li>
                <li>edit title and video file</li>
                <li>Comments left</li>
            </ul>
        </div>
    )
}
export default Channel;