import { useEffect, useState } from "react";
import Comments from "./Comments";

function VideoPage({watch, user}){
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const [numberOfSubs, setNumberOfSubs] = useState(0)
    const [subscribing, setSubscribing] = useState(false)
    const [newComment, setNewComment] = useState(false)
    const [likesArray, setLikesArray] = useState([])
    const [subscriptionsArray, setSubscriptionsArray] = useState([])
    const [description, setDescription] = useState('')


    useEffect(()=>{
        fetch(`/channels/${watch.channel.id}`)
        .then(r=>r.json())
        .then(r=>setNumberOfSubs(r.subscriptions.length))
    },[])

    useEffect(()=>{
        fetch("/likes")
        .then(r=>r.json())
        .then(r=>setLikesArray(r))
    },[])

    useEffect(()=>{
        fetch("/subscriptions")
        .then(r=>r.json())
        .then(r=>setSubscriptionsArray(r))
    },[])

    function subscribe(){
        setSubscribing(!subscribing)
        //check if subscribed
        //conditionaly say subscribe or unsubscribe
        //fetch().then().then()
    }

    function commenting(){
        setNewComment(!newComment)
    }

    function like(){
        setUpVote(!upVote)
        if (downVote === true){
            setDownVote(false)
        }
        //check if liked 
        //conditionally show number of likes or number + 1
        //fetch().then().then()
    }

    function dislike(){
        setDownVote(!downVote)
        if (upVote === true){
            setUpVote(false)
        }
        //check if liked 
        //conditionally show number of likes or number + 1
        //fetch().then().then()
    }
      const commentArray = watch.comments.map(comment=>{
        return(<Comments key={comment.id} comment={comment}/>)
      })
    //   console.log(watch.channel.id)

    function handleCreate(){
        fetch("/comments",{
            method: "POST",
            headers:{"Content-Type":"Application/json"},
            body: JSON.stringify({description, user_id: user.id, video_id: watch.id})
            })
            .then(r=>r.json())
            setDescription("")
    }

    return(
        <div>
            <h2>{watch.title}</h2>
            <iframe width="710" height="400" src={watch.src}></iframe><br></br>
            <p>Description: {watch.description}</p>
            <p>{watch.channel.title}</p>
            <p>{numberOfSubs} subs</p>
            {subscribing ? <button onClick={subscribe}>Unsubscribe</button> : <button onClick={subscribe}>Subscribe</button>}
            {upVote ? <button onClick={like}>Unlike</button> : <button onClick={like}>Like</button>}
            {downVote ? <button onClick={dislike}>Un-dislike</button> : <button onClick={dislike}>Dislike</button>}<br></br>
            {newComment ? <div>
                          <h2>Comment</h2>
                              <form id="new_comment"onSubmit={handleCreate}>
                                 <input type="text" id="description" name="description" placeholder="Leave a comment" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                              </form>
                              <button type="submit" form="new_comment" value="Submit">submit</button>
                          <button onClick={commenting}>Cancel</button>
                        </div> :
                        <button onClick={commenting}>Leave a Comment</button>}
            {commentArray}
        </div>
    )
}
export default VideoPage;

