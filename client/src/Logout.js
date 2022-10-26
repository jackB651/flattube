import { useHistory } from "react-router-dom";
function Logout({user, setUser}){
  const history = useHistory()
    function handlClick(){
        fetch("/logout", {method: "DELETE"})
        .then(r=>{
            if (r.ok){
                setUser(null);
            }
        })
       history.push("/home") 
    }
    return(
        <button onClick={handlClick}>Logout</button>
    )
} 
export default Logout;