import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route , Switch} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import firebase from "firebase/firebase-browser";

const RoomList = () => (
    <Switch>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:roomId" component={Rooms}/>
    </Switch>
);

const appRouting = (
    <HashRouter>
    <Switch>    
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/rooms" component={RoomList}/>
     </Switch>
    </HashRouter>
);

if(!location.hash.length) {
    location.hash = "#/login";
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvl92HhlyIdzgxfumUbSN9YqnJPHrx3Fk",
    authDomain: "electron-chat-f90d6.firebaseapp.com",
    databaseURL: "https://electron-chat-f90d6.firebaseio.com",
    projectId: "electron-chat-f90d6",
    storageBucket: "",
    messagingSenderId: "359946922364"
  };
firebase.initializeApp(config);

ReactDOM.render(appRouting, document.getElementById("app"));