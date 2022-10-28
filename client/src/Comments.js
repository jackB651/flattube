import { useEffect, useState } from "react";

function Comments({comment}){
    const [commentInfo, setCommentInfo] = useState({})
    const [editing, setEditing] = useState(false)
    const [statement, setStatement] = useState('')

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
        fetch(`comments/${comment.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type":"Application/json",
                "Accept": "Application/json"
            },
            body: JSON.stringify({statement: statement, video_id: comment.video.id, user_id: comment.user.id})
        })
        .then(r=>r.json())
        .then(r=>console.log(r))
    }
    return (
        <div>
            {editing?
                <div>
                    <form id="change_comment"onSubmit={()=>handleEdit(comment.id)}>
                         <input type="text" id="statement" name="statement" placeholder="comment..." value={statement} onChange={(e)=>{setStatement(e.target.value)}}/>
                    </form>
                    <button type="submit" form="change_video" value="Submit">submit</button>
                  <button onClick={handleEdit}>Cancel</button>
               </div>
               :<div>
                  <p>{comment.statement}</p>
                  <button onClick={handleEdit}>Edit</button>
               </div>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Comments;