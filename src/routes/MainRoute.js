// @flow
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserList from '../features/screens/UserListScene';
import UserDetail from '../features/screens/UserDetailScene';

export default class MainRoute extends Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact strict component={UserList} />
          <Route path="/detail" exact strict component={UserDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}
