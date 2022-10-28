import { useState, useEffect } from "react";
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
         return(<div className="channel-select" key={channel.id} onClick={()=>handleClick(channel.id)}>
         <p>{channel.title}</p>
         <p>{`subs:${channel.subscriptions.length}`}</p>
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
            <div id="search-outer">
              <div id="searchbar">
                <input 
                  placeholder="Search..."
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div id="grid-container">
              <div id="child-2">
                <h2>Channels</h2>
                  <div id="channelsearch">
                   {listChannels}
                  </div>
              </div>  
              <div id="child-1">  
                {listVids}
              </div>
            </div>
        </div>
    )
}
export default Home;