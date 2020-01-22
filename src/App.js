import React from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard";
import Navi from "./Components/Navi";
import {Switch,Route} from "react-router-dom";
import Signup from "./Components/Auth/Signup";
import Signin from "./Components/Auth/Signin"
import TweetDetails from "./Components/Actions/TweetDetails";

function App() {
  return (
    <div>

        <Navi/>

        <Switch>

            <Route exact path='/' component={Dashboard} />
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signin' component={Signin}/>
            <Route exact path='/details' component={TweetDetails}/>

        </Switch>

    </div>
  );
}

export default App;
