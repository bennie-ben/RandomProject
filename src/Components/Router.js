import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Welcome from "./Welcome";
import Click from "./Click";
import About from "./Header_Routes/About";
import Profile from "./Header_Routes/Profile";
import Prototype from './Prototype';

const Router = () =>{
    return (
    <BrowserRouter>
        <>
        <Header/>
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/click" component={Click}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/prototype" component={Prototype}/>
        </Switch>
        </>
    </BrowserRouter>
    );
}



export default Router;