import { useEffect, useState } from "react";
import Comments from "./Comments";

function VideoPage({watch, user}){
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const [numberOfSubs, setNumberOfSubs] = useState(0)
    const [subscribing, setSubscribing] = useState(false)
    const [newComment, setNewComment] = useState(false)
    const [likesArray, setLikesArray] = useState([])
    const [dislikesArray, setDislikesArray] = useState([])
    const [subscriptionsArray, setSubscriptionsArray] = useState([])
    const [description, setDescription] = useState('')
    const [numberOfLikes, setNumberOfLikes] = useState(0)
    const [numberOfDislikes, setNumberOfDislikes] = useState(0)



    useEffect(()=>{
        fetch(`/channels/${watch.channel.id}`)
        .then(r=>r.json())
        .then(r=>setNumberOfSubs(r.subscriptions.length))
    },[])

    useEffect(()=>{
        fetch("/likes")
        .then(r=>r.json())
        .then(r=>{
            setLikesArray(r.find((like)=>{
            return(like.video.id === watch.id && like.user.id === user.id)
        }));
            setNumberOfLikes(r.length);
        if (likesArray.length>0) {
            setUpVote(true)
        }
    })
    },[])

    useEffect(()=>{
        fetch("/subscriptions")
        .then(r=>r.json())
        .then(r=>{
            setSubscriptionsArray(r.find((subscription)=>{
            return(subscription.video.id === watch.id && subscription.user.id === user.id)
        }));
        if (subscriptionsArray.length>0) {
            setSubscribing(true)
        }
    })
    },[])

    useEffect(()=>{
        fetch("/dislikes")
        .then(r=>r.json())
        .then(r=>{
            setDislikesArray(r.find((dislike)=>{
            return(dislike.video.id === watch.id && dislike.user.id === user.id)
        }));
            setNumberOfDislikes(r.length);
        if (dislikesArray.length>0) {
            setDownVote(true)
        }
    })
    },[])

    function subscribe(){
        if (subscribing === false){
            //post to  subscriptions
            fetch("/subscriptions",{
                method: "POST",
                headers:{"Content-Type":"Application/json"},
                body: JSON.stringify({user_id: user.id, video_id: watch.id})
                })
                .then(r=>r.json())
        } else {
            fetch(`/subscriptions/${subscriptionsArray[0].id}`, {method: "DELETE"})
           .then(r=>r.json())
        }
        setSubscribing(!subscribing)
    }

    function commenting(){
        setNewComment(!newComment)
    }

    function like(){
        if (upVote === true){        
            //delete upvote
            fetch(`/likes/${likesArray[0].id}`, {method: "DELETE"})
           .then(r=>r.json())
         } else {
            //post new like
             fetch("/likes/",{
                method: "POST",
                headers:{"Content-Type":"Application/json"},
                body: JSON.stringify({user_id: user.id, video_id: watch.id})
                })
                .then(r=>r.json())
            if (downVote === true){
            setDownVote(false)
            //delete downVote
             fetch(`/dislikes/${dislikesArray[0].id}`, {method: "DELETE"})
             .then(r=>r.json())
        }
        setUpVote(!upVote)
    }}

    function dislike(){
        if (downVote === true){        
            //delete downvote
             fetch(`/dislikes/${dislikesArray[0].id}`, {method: "DELETE"})
             .then(r=>r.json())
         } else {
            //post new dislike
             fetch("/dislikes",{
                method: "POST",
                headers:{"Content-Type":"Application/json"},
                body: JSON.stringify({user_id: user.id, video_id: watch.id})
                })
                .then(r=>r.json())
            if (upVote === true){
            setUpVote(false)
            //delete upVote
            fetch(`/likes/${likesArray[0].id}`, {method: "DELETE"})
            .then(r=>r.json())
        }
        setUpVote(!upVote)
    }
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
            <div><p>{`likes: ${numberOfLikes}`}</p><p>{`dislikes: ${numberOfDislikes}`}</p></div>
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

