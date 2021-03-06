// @flow
import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import UserList from '../features/user/screens/UserListScene';
import UserProfile from '../features/user/screens/UserProfileScene';
import UserNotFound from '../features/user/screens/UserNotFound';

export default class MainRoute extends Component<{}> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact strict component={UserList} />
          <Route path="/user/:id" exact strict component={UserProfile} />
          <Route path="/404" component={UserNotFound} />
        </Switch>
      </HashRouter>
    );
  }
}
