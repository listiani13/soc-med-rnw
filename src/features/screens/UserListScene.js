// @flow
import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from '../../core-ui';
import {USER_LIST} from '../../data/users';
import UserCard from '../../components/UserCard';

export default class UserList extends Component<{}> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
        }}
      >
        <Text size="xlarge" style={{paddingHorizontal: 10}}>
          User List
        </Text>
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}
        >
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
