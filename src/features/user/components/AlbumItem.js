// @flow
import React, {Component, Fragment} from 'react';
import Lightbox from 'react-images';
import {ListItem, ListItemText} from '@material-ui/core';

type ImageSource = {src: string};
type Props = {
  photos: Array<ImageSource>,
  title: string,
  name: string,
};
type State = {
  isLightBoxOpen: boolean,
  currentImage: number,
};

export default class AlbumItem extends Component<Props, State> {
  state = {
    isLightBoxOpen: false,
    currentImage: 0,
  };
  render() {
    let {title, photos, name} = this.props;
    let {isLightBoxOpen, currentImage} = this.state;
    return (
      <Fragment>
        <ListItem button onClick={() => this.setState({isLightBoxOpen: true})}>
          <ListItemText primary={title} secondary={`By: ${name}`} />
        </ListItem>
        <Lightbox
          images={photos}
          currentImage={currentImage}
          isOpen={isLightBoxOpen}
          onClickPrev={() => this.setState({currentImage: currentImage - 1})}
          onClickNext={() => this.setState({currentImage: currentImage + 1})}
          onClose={() => this.setState({isLightBoxOpen: false})}
          onClickThumbnail={(index) => this.setState({currentImage: index})}
          showThumbnails
          backdropClosesModal
        />
      </Fragment>
    );
  }
}
