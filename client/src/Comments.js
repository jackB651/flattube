import { useState } from "react";

function Comments({comment,user}){
    return (
        <div>
            <p>{user.username}</p>
            <p>{comment.statement}</p>
            <button>{comment.likes} Likes</button>
            <button>{comment.dislikes} Dislikes</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Comments;