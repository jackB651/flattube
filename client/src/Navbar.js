import Logout from "./Logout";
import { NavLink } from "react-router-dom";
function Navbar ({user, setUser}){
    return(
        <div>
            <div>
                <h3>Flattube</h3>
            </div>  
            <div>
              <NavLink to="/home">home_</NavLink> 
              {user?<NavLink to="/channel">Channel</NavLink>:""} 
              {user?`Welcome ${user.username}`:""}
              {user?<Logout user={user} setUser={setUser}/>:<NavLink to="/login">Sign In</NavLink>}
              {/* {user.channel.title}*/}
            </div>
        </div>
    )
}
export default Navbar;