import { useEffect, useState } from "react";

function Comments({comment}){
    const [commentInfo, setCommentInfo] = useState({})
    const [editing, setEditing] = useState(false)
    useEffect(()=>{
        fetch(`/comments/${comment.id}`)
        .then(r=>r.json())
        .then(r=>(setCommentInfo(r)))
    },[])
    function handleDelete(){
        fetch(`/comments/${comment.id}`, {method: "DELETE"})
        .then(r=>r.json()
        .then(r=>console.log(r)))
    }
    function handleEdit(){
        setEditing(!editing)
        // fetch(`comments/${comment.id}`,{
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type":"Application/json",
        //         "Accept": "Application/json"
        //     },
        //     body: JSON.stringify({

        //     })
        // })
        // .then(r=>r.json())
        // .then(r=>console.log(r))
    }
    return (
        <div>
            {/* <p>User: {commentInfo.user.username}</p> */}
            <p>{comment.statement}</p>
            {/* <button>{comment.likes} Likes</button>
            <button>{comment.dislikes} Dislikes</button> */}
            {editing?<button onClick={handleEdit}>Cancel</button>:<button onClick={handleEdit}>Edit</button>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Comments;