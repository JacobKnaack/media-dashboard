import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { fetchMedia } from '../../store/media';

type mediaState = {
  media: {
    data: Array<object>
  }
}

const mapStateToProps = (state: mediaState) => {
  return {
    mediaData: state.media.data,
  }
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchMedia,
  }, dispatch);
};
const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

type propsFromRedux = ConnectedProps<typeof connector>

const MediaList = (props: propsFromRedux) => {
  React.useEffect(() => {
    props.fetchMedia();
  }, []);
  return (
    <ul>
      {props.mediaData.map((item: object) => <li>{item}</li>)}
    </ul>
  )
};

export default connector(MediaList);
