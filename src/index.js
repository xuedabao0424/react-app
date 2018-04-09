import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Profile from "./containers/Profile/Profile";
import Home from "./containers/Home/Home";
import Lesson from "./containers/Lesson/Lesson";
import App from "./containers/App";

ReactDom.render(<Router>
   <App>
       <Switch>
           {/*匹配path*/}
           <Route path="/" exact={true} component={Home}/>
           <Route path="/lesson"  component={Lesson}/>
           <Route path="/profile" component={Profile}/>
       </Switch>
   </App>
</Router>,window.root);