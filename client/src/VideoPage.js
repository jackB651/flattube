import { useEffect, useState } from "react";
import Comments from "./Comments";

function VideoPage({watch, user}){
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const [sub, setSub] = useState(false)
    function subscribe(e){
        e.preventDefault()
        //check if subscribed
        //conditionaly say subscribe or unsubscribe
        //fetch().then().then()
    }

    function like(e){
        e.preventDefault()
        //check if liked 
        //conditionally show number of likes or number + 1
        //fetch().then().then()
    }

    function dislike(e){
        e.preventDefault()
        //check if liked 
        //conditionally show number of likes or number + 1
        //fetch().then().then()
    }
      const commentArray = watch.comments.map(comment=>{
        return(<Comments key={comment.id} comment={comment} user={user}/>)
      })
    return(
        <div>
            <h2>{watch.title}</h2>
            <iframe width="710" height="400" src={watch.src}></iframe><br></br>
            <p>{watch.channel.title}</p>
            <p>{watch.channel.number_of_subscribers} subs</p>
            <button onClick={subscribe}>{`Subscribe`}</button>
            <button onclick={like}>{`Likes ${watch.likes}`}</button>
            <button onClick={dislike}>{`Dislikes ${watch.dislikes}`}</button><br></br>
            <button>Leave a Comment</button>
            {commentArray}
        </div>
    )
}
export default VideoPage;


//Graveyard
//useEffect(()=>{
    //     fetch("/video")
    //     .then(r=>r.json())
    //     .then(data=>console.log(data))
    //   },[])