import { useState } from "react"
import { useHistory } from "react-router-dom"

function Log({handleclick, user, setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    let history = useHistory()

    const handleLogin=(e)=>{
        e.preventDefault()
        fetch("/login",{
        method: "POST",
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify({username, password})
        })
        .then(r=>r.json())
        .then(data=>{
            setUser(data);
            // if (data.errors) setErrors(Object.entries(data.errors))
        })
        .catch(error=>{alert(error)})
        setUsername("")
        setPassword("")
        history.push("/home")
    }
    return(
        <div>
            <p>login form</p>
            <form id="loginform" onSubmit={handleLogin}>
                    <input type="text" id="username" name="username" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br></br>
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </form>
            <button type="submit" form="loginform" value="Submit">Log in</button>
            {errors?errors.map(e=><div>{e[0]+': '+e[1]}</div>):null}
            <p>New? Click here to <a href="" onClick={handleclick}>Create Account</a>.</p>
        </div>
    )
}
export default Log;