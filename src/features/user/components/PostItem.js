import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Button, TextField} from '@material-ui/core';
import {Text} from '../../../core-ui';
import {BORDER_RADIUS, BOX_SHADOW} from '../../../constants/layout';
import {LIGHT_GREY} from '../../../constants/color';
import CommentItem from './CommentItem';
import getInitialName from '../../../helpers/getInitialName';

type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};
type Props = {
  name: string,
  title: string,
  content: string,
  comments: Array<Comment>,
};
type State = {
  isCommentsShown: boolean,
};
export default class PostItem extends Component<Props, State> {
  state = {
    isCommentShown: false,
  };
  render() {
    let {name, title, content, comments} = this.props;
    let {isCommentShown} = this.state;

    return (
      <View style={styles.root}>
        <View style={styles.postHeader}>
          <View style={styles.identity}>
            <Avatar sizes="small" style={{marginRight: 10}}>
              {getInitialName(name)}
            </Avatar>
            <View style={styles.name}>
              <Text size="small">{name}</Text>
              <Text>{title}</Text>
            </View>
          </View>
          <Text size="xsmall" style={styles.post}>
            {content}
          </Text>
          <Button
            onClick={this._toggleComment}
            style={{alignSelf: 'flex-start'}}
          >
            {isCommentShown ? 'Hide' : 'Show'} Comments
          </Button>
        </View>
        {isCommentShown && (
          <View style={styles.commentList}>
            {comments.map((comment, index) => {
              let {name, body} = comment;
              return <CommentItem name={name} body={body} key={index} />;
            })}
            <TextField
              label="Add comment here"
              multiline
              rows="2"
              style={{marginBottom: 12}}
            />
            <Button
              variant="contained"
              color="primary"
              style={{alignSelf: 'flex-end', width: '25%'}}
            >
              Post
            </Button>
          </View>
        )}
      </View>
    );
  }
  _toggleComment = () => {
    this.setState({isCommentShown: !this.state.isCommentShown});
  };
}

const styles = StyleSheet.create({
  root: {
    borderRadius: BORDER_RADIUS,
    boxShadow: BOX_SHADOW,
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    marginBottom: 15,
  },
  postHeader: {
    padding: 5,
  },
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginBottom: 5,
  },
  post: {
    paddingVertical: 5,
  },
  commentList: {
    borderTopColor: LIGHT_GREY,
    borderTopWidth: 1,
    padding: 5,
    backgroundColor: LIGHT_GREY,
  },
});
