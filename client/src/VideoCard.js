import { useState } from "react";
import { useHistory } from "react-router-dom";

function VideoCard ({video, setWatch}){


    const history = useHistory();
    function click (){
        setWatch(video)
     
        history.push("/watch")
    }

    return(
        <div className="VideoCard" onClick={click}>
            <div className="center-circle">
              <h3>{video.title}</h3>
              <iframe width="280" height="180" src={`${video.src}`}></iframe>
              {/* <h3>{`By: ${video.channel.title}`}</h3> */}
            </div>
        </div>
    )
}
export default VideoCard;