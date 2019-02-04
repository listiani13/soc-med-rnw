// @flow
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserList from '../features/user/screens/UserListScene';
import UserProfile from '../features/user/screens/UserProfileScene';

export default class MainRoute extends Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact strict component={UserList} />
          <Route path="/user/:id" exact strict component={UserProfile} />
        </Switch>
      </BrowserRouter>
    );
  }
}
