// @flow
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../../../core-ui';
import {USER_LIST} from '../../../data/users';
import UserCard from '../../../components/UserCard';

export default class UserList extends Component<{}> {
  render() {
    return (
      <View style={styles.root}>
        <Text size="xlarge" style={styles.title}>
          User List
        </Text>
        <View style={styles.content}>
          {USER_LIST.map((user, index) => {
            let {name, username, website, phone} = user;
            return (
              <UserCard
                name={name}
                username={username}
                website={website}
                phone={phone}
                style={{marginHorizontal: 12, marginVertical: 10}}
              />
            );
          })}
        </View>
      </View>
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
});
