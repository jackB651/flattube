import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

function Home({videos, channelArray, setWatch}){

    const [search, setSearch ] = useState("")
    const [videoArray, setVideoArray] = useState([])
    const [Channelfilter, setChannelFilter] = useState(null)
    const [channelId, setChannelId] = useState('')

        function handleClick(id){
            if (id === channelId){
                setChannelId('')
            } else {
                setChannelId(id)
            }
        }

        const channelVids = videos.filter((video)=>{
            if (channelId === ""){
                return video}
            else if(video.channel.id === channelId){ 
                  return video
                }
        })

       const listChannels = channelArray.map((channel) =>{
         return(<div key={channel.id} onClick={()=>handleClick(channel.id)}>
         <p>{channel.title}</p>
         <p>{channel.subscriptions.length}</p>
        </div>)});
              
       const listVids = channelVids.filter((val)=>{
           if (search === ""){
             return val}
           else if (val.title.toLowerCase().includes(search.toLowerCase())){
             return val}
       }).map((video) =>
       <VideoCard key={video.id} video={video} setWatch={setWatch}/>);
   
       const handleSearch = (e) => {
        setSearch(e.target.value)
       }

    return(
        <div>
            <input 
                placeholder="Search..."
                onChange={handleSearch}
            />
            <div>
                {listVids}
            </div>
            <div>
                <h2>virticle channel selector</h2>
                {listChannels}
            </div>
        </div>
    )
}
export default Home;