import { useState } from "react"
import { useHistory } from "react-router-dom"
function NewAccount({handleclick, user, setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [channelName, setChannelName] = useState("")
    const history = useHistory()

    const channelItem = {
        title : channelName,
        number_of_subscribers : 0
    }
    
    const handleNew=(e)=>{
        e.preventDefault()
        fetch("/signup",{
        method: "POST",
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify({username, password})
        })
        .then((r)=>{
            if (r.ok) {
              r.json().then((user)=>{
                setUser(user);
                fetch("/channels",{
                    method: "POST",
                    headers:{"Content-Type":"Application/json"},
                    body: JSON.stringify({title: channelName, user_id: user.id})
                })
                .then()
                .then()
              })
           }
        })
        setUsername("")
        setPassword("")
        history.push('/home')
    }
    
    // .then((r) => {
    //     if (r.ok) {
    //       r.json().then((user) => {
    //         setUser(user)
    //       });
    //     }
    //   });

    return(
        <div>
            <p>Create account form</p>
            <form id="accountform" onSubmit={handleNew} >
                <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br></br>
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
                <input type="Text" id="newChannel" name="newChannel" placeholder="Your channel name" value={channelName} onChange={(e)=>{setChannelName(e.target.value)}}/>
            </form>
            <button type="submit" form="accountform" value="Submit">Create Account</button>
            <p>Already have an account? Click here to <a href="" onClick={handleclick}>login</a>.</p>
        </div>
    )
}
export default NewAccount;