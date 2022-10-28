import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import VideoCard from "./VideoCard";


function Channel({user, setWatch, setUser}){
  const [channel, setChannel] = useState(null)
  const [newVideo, setNewVideo] = useState(false)
  const [title, setTitle] = useState("")
  const [src, setSrc] = useState("")
  const [description, setDescription] = useState('')
  const [editing, setEdititng] = useState(false)
  const [commentArray, setCommentArray] = useState([])

   const history = useHistory
  // console.log(channel)
  useEffect(()=>{
    fetch("/me")
    .then(r=>r.json())
    .then(data=>{
      fetch(`/channels/${data.channel.id}`).then(r=>r.json()).then(r=>setChannel(r));
    });
    fetch('/channels')
    .then(r=>r.json())
    .then(data=>setCommentArray(data))
  },[])
   
    function handleDelete(id){
      fetch(`/videos/${id}`, {method: "DELETE"})
      .then(r=>r.json())
      .then(r=>console.log(r))
      history.push("/home")
    }

    function handleDeleteComment(id){
      fetch(`/comments/${id}`, {method: "DELETE"})
      .then(r=>r.json())
      .then(r=>console.log(r))
      history.push("/home")
    }

    function handleClick(){
      setNewVideo(!newVideo)
    }

    function handleEdit(){
      setEdititng(!editing)
    }

    function handleCreate (e){
      e.preventDefault()
      fetch("/videos",{
        method: "POST",
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify({src, title, description, channel_id: channel.id})
        })
        .then(r=>r.json())
        .then(data=>{
            console.log(data);
         history.push("/home")
        })
    }

    function submitEdit (id){
      fetch(`/videos/${id}`,{
        method: "PATCH",
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify({src: src, title: title, description: description, channel_id: channel.id})
        })
        .then(r=>r.json())
        .then(data=>{
            console.log(data);
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
                    {editing?<div>
                              <form id="change_video"onSubmit={()=>submitEdit(video.id)}>
                                 <input type="text" id="src" name="src" placeholder="url" value={src} onChange={(e)=>{setSrc(e.target.value)}}/><br></br>
                                 <input type="text" id="title" name="title" placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br></br>
                                 <input type="text" id="description" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                              </form>
                              <button type="submit" form="change_video" value="Submit">submit</button>
                              <button onClick={handleEdit}>cancel</button>
                          </div>:<button onClick={handleEdit}>Edit</button>}
                    </div>
                     }) : null}
                {newVideo ? <div>
                              <form id="new_video"onSubmit={(e)=>handleCreate(e)}>
                                 <input type="text" id="src" name="src" placeholder="url" value={src} onChange={(e)=>{setSrc(e.target.value)}}/><br></br>
                                 <input type="text" id="title" name="title" placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br></br>
                                 <input type="text" id="description" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                              </form>
                              <button type="submit" form="new_video" value="Submit">submit</button>
                              <button onClick={handleClick}>cancel</button>
                          </div> : 
                          <button onClick={handleClick}>New Video</button>}
                <h2>Your comments</h2>
                {user ? user.comments.map(comment=>{
                  return<div className="my-comments">
                          <div>{comment.statement}</div>
                          <button onClick={()=>handleDeleteComment(comment.id)}>Delete</button>
                        </div>
                }):null}
            </ul>
        </div>
    )
}
export default Channel;