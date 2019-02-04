// @flow
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Route} from 'react-router-dom';
import {Text} from '../../../core-ui';
import {USER_LIST} from '../../../data/users';
import UserCard from '../../../components/UserCard';

export default class UserList extends Component<{}> {
  render() {
    return (
      <Route>
        {({history}) => {
          return (
            <View style={styles.root}>
              <Text size="xlarge" style={styles.title}>
                User List
              </Text>
              <View style={styles.content}>
                {USER_LIST.map((user, index) => {
                  let {name, username, website, phone, id} = user;
                  return (
                    <UserCard
                      name={name}
                      username={username}
                      website={website}
                      phone={phone}
                      style={styles.userCard}
                      key={index}
                      onClick={() => history.push(`/user/${id}`)}
                    />
                  );
                })}
              </View>
            </View>
          );
        }}
      </Route>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 20,
  },
  title: {
    paddingHorizontal: 10,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  userCard: {
    marginHorizontal: 12,
    marginVertical: 10,
  },
});
