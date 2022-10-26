import { useState } from "react";
import NewAccount from "./NewAccount";
import Log from "./Log";

function Login({user, setUser}){
    
    const [loc, setLoc] = useState(false)

    const handleclick = (e) => {
        e.preventDefault()
        setLoc(!loc)
    }

    return (
        <div>
            <p>create user page. Creating user creates a mew channel that user is subscribed to.</p>
            <p>Once done, dumps to home page</p>
            {loc ? <NewAccount handleclick={handleclick} user={user} setUser={setUser}/> : <Log handleclick={handleclick} user={user} setUser={setUser}/>}
        </div>
    )
}
export default Login;