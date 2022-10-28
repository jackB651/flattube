import Logout from "./Logout";
import { NavLink } from "react-router-dom";
function Navbar ({user, setUser}){
    return(
        <div className="flex-box">
            <div>
                <h3>Flattube</h3>
            </div>  
            <div id="switchboard">
              <NavLink to="/home"><button>Home</button></NavLink> 
              {user?<NavLink to="/channel"><button>Channel</button></NavLink>:""} 
              {user?<button>Welcome {user.username}</button>:""}
            </div>
            <div id="loging">
                {user?<Logout user={user} setUser={setUser}/>:<NavLink to="/login"><button>Sign in</button></NavLink>}
            </div>
        </div>
    )
}
export default Navbar;