// @flow
import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Route} from 'react-router-dom';
import {compose, graphql} from 'react-apollo';
import {Text} from '../../../core-ui';
import UserCard from '../../../components/UserCard';
import {GET_USER_LIST} from '../../../graphql/queries/users';
import {GREY} from '../../../constants/color';

type User = {
  id: string,
  name: string,
  username: string,
  website: string,
  phone: string,
};
type Props = {
  queryResult: {
    data: Array<User>,
    loading: boolean,
  },
};
class UserListScene extends Component<Props> {
  render() {
    return (
      <Route>
        {({history}) => {
          let {
            queryResult: {loading, data},
          } = this.props;
          if (loading) {
            return (
              <View style={[styles.root, styles.loading]}>
                <ActivityIndicator size={40} color={GREY} />
              </View>
            );
          }
          return (
            <View style={styles.root}>
              <Text size="xlarge" style={styles.title}>
                User List
              </Text>
              <View style={styles.content}>
                {data.map((user, index) => {
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

export default compose(
  graphql(GET_USER_LIST, {
    props: ({data}) => ({queryResult: data}),
  }),
)(UserListScene);
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
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
