import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

function Home({videos, channelArray, setWatch}){

    const [search, setSearch ] = useState("")
    const [videoArray, setVideoArray] = useState([])
    const [filterChannel, setFilterChannel] = useState(null)

        function handleClick(){}

       const listChannels = channelArray.map((channel) =>
         <div key={channel.id} onClick={handleClick}>
         <p>{channel.title}</p>
         <p>{channel.number_of_subscribers}</p>
        </div>);
              
       const listVids = videos.filter((val)=>{
           if (search == ""){
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