// @flow
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TextField, Button, List} from '@material-ui/core';
import {Text} from '../../../core-ui';
import {USER_LIST} from '../../../data/users';
import {LIGHT_GREY} from '../../../constants/color';
import DetailHeader from '../components/DetailHeader';
import PostItem from '../components/PostItem';
import {BORDER_RADIUS} from '../../../constants/layout';
import {COMMENTS} from '../../../data/comment';
import {POSTS} from '../../../data/posts';
import {PHOTOS} from '../../../data/photos';
import {ALBUMS} from '../../../data/albums';
import AlbumItem from '../components/AlbumItem';

export default class UserDetailScene extends Component<{}> {
  render() {
    let {name, username} = USER_LIST[0];

    return (
      <ScrollView contentContainerStyle={styles.root}>
        <DetailHeader name={name} username={username} />
        <View style={styles.separator} />
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View style={{flex: 2}}>
            <Text size="large">Albums</Text>
            <List>
              {ALBUMS.map((album, index) => {
                let {title} = album;
                return (
                  <AlbumItem
                    title={title}
                    photos={PHOTOS.map((photo) => ({
                      src: photo.url,
                      thumbnail: photo.thumbnailUrl,
                    }))}
                    name={name}
                  />
                );
              })}
            </List>
          </View>
          <View style={styles.post}>
            <Text size="large">Posts</Text>
            <View style={styles.createNewPost}>
              <TextField
                label="Add post here"
                multiline
                rows="4"
                placeholder="How are you today?"
                style={stylesMUI.txtNewPost}
              />
              <Button
                variant="contained"
                color="primary"
                style={stylesMUI.btnNewPost}
              >
                Post
              </Button>
            </View>
            <View style={styles.postList}>
              {POSTS.map((post, index) => {
                let {title, body} = post;
                return (
                  <PostItem
                    name={name}
                    title={title}
                    content={body}
                    comments={COMMENTS}
                    key={index}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
    width: '100%',
    height: 0.5,
    borderBottomColor: LIGHT_GREY,
  },
  post: {
    flex: 5,
  },
  createNewPost: {
    borderRadius: BORDER_RADIUS,
    borderColor: LIGHT_GREY,
    marginHorizontal: 12,
    marginVertical: 12,
  },

  postList: {
    paddingHorizontal: 12,
  },
});

const stylesMUI = {
  txtNewPost: {
    marginBottom: 12,
  },
  btnNewPost: {
    alignSelf: 'flex-end',
    width: '25%',
  },
};
