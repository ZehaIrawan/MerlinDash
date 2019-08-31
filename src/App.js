import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Delivery from './components/Delivery';
import MsgPersonalization from './components/MsgPersonalization';
import NotificationAppearance from './components/NotificationAppearance';
import NotificationBehavior from './components/NotificationBehavior';
import Onesignal from './components/Onesignal';
import PlayerId from './components/PlayerId';
import Prompting from './components/Prompting';
import Settings from './components/Settings';
import Users from './components/Users';

function App() {
  return (
    <div className="container">
      {/* <Sidebar></Sidebar>
      <Content></Content> */}
      <Router>
        <Fragment>
          <Route exact path="/" component={Dashboard}></Route>
          <Switch>
            <Route exact path="/settings" component={Settings}></Route>
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/delivery" component={Delivery}></Route>
            <Route exact path="/onesignal" component={Onesignal}></Route>
            <Route exact path="/prompting" component={Prompting}></Route>
            <Route
              exact
              path="/nappearance"
              component={NotificationAppearance}
            ></Route>
            <Route
              exact
              path="/mpersonalization"
              component={MsgPersonalization}
            ></Route>
            <Route exact path="/playerid" component={PlayerId}></Route>
            <Route
              exact
              path="/nbehavior"
              component={NotificationBehavior}
            ></Route>
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
