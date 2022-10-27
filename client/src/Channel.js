import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import VideoCard from "./VideoCard";


function Channel({user, setWatch, setUser}){
  const [channel, setChannel] = useState(null)
  const [newVdeo, setNewVideo] = useState(false)
  const [title, setTitle] = useState("")
  const [src, setSrc] = useState("")
  const [description, setDescription] = useState('')

   const history = useHistory
  // console.log(channel)
  useEffect(()=>{
    fetch("/me")
    .then(r=>r.json())
    .then(data=>{
      fetch(`/channels/${data.channel.id}`).then(r=>r.json()).then(r=>setChannel(r));

    });
  },[])
   
    function handleDelete(id){
      fetch(`/videos/${id}`, {method: "DELETE"})
      .then(r=>r.json())
      .then(r=>console.log(r))
      history.push("/watch")
    }

    function handleCreate (e){
      fetch("/videos",{
        method: "POST",
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify({src, title, description, channel_id: channel.id})
        })
        .then(r=>r.json())
        .then(data=>{
            setUser(data);
        })
    }

    return(
        <div>
            <ul>
                {/* <h2>{user.channel.title}</h2> */}
                <h4>Your Videos</h4>
                {channel ? channel.videos.map(video=>{
                  return<div>
                    <VideoCard video={video} setWatch={setWatch}/>
                    <button onClick={()=>handleDelete(video.id)}>Delete</button>
                    <button>Edit</button>
                    </div>
                     }) : null}
                {newVdeo ? <div>
                              <form id="new_video"onSubmit={handleCreate}>
                                 <input type="text" id="src" name="src" placeholder="url" value={src} onChange={(e)=>{setSrc(e.target.value)}}/><br></br>
                                 <input type="text" id="title" name="title" placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br></br>
                                 <input type="text" id="description" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                              </form>
                              <button type="submit" form="new_video" value="Submit">submit</button>
                              <button>cancel</button>
                          </div> : 
                          <button>New Video</button>}
                <li>edit title and video file</li>
                <li>Comments left</li>
            </ul>
        </div>
    )
}
export default Channel;