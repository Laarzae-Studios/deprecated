import React from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import MeetTheTeam from "./components/MeetTheTeam";
import Homepage from "./components/HomePageClean";
import HomePageClean from "./components/HomePageClean.jsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/meet">
                    <MeetTheTeam/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
