import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Channel from './Channel';
import Home from "./Home";
import Login from "./Login";
import VideoPage from "./VideoPage";

function App() {

  //state for user
  const [videos, setVideos] = useState([])
  const [user, setUser] = useState("") 
  const [channelArray, setChannelArray] = useState([])
  const [watch, setWatch] = useState("")

  useEffect(()=>{
    fetch("/me")
    .then(r=>r.json())
    .then(data=>setUser(data));
    // console.log(user)
  },[])

  useEffect(() => {
        fetch("/videos")
          .then((r) => r.json())
          .then((video) => setVideos(video));
        fetch("/channels")
          .then(r=>r.json())
          .then(data=>setChannelArray(data));
      }, []);
  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser}/>
        <Switch>
          <Route path="/home">
            <Home videos={videos} channelArray={channelArray} setWatch={setWatch}/>
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser}/>
          </Route>
          <Route path="/channel">
            <Channel user={user} setUser={setUser} setWatch={setWatch}/>
          </Route>
          <Route path="/watch">
            <VideoPage watch={watch} user={user}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


//Graveyard

//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

{/* <Route path="/testing">
<h1>Test Route</h1>
</Route> */}