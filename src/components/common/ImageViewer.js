import React, { Component } from 'react';
import PT from 'prop-types';

class ImageViewer extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="image-viewer">
        <div className="close" onClick={this.props.imgclose}>
          <span className='glyph  icon glyphicon-remove' />
        </div>
        <img src={this.props.imgurl} className="img" />
      </div>
    )
  }
}

ImageViewer.propTypes ={
  imgclose : PT.func.isRequired,
  imgurl: PT.string.isRequired,
  imgtitle : PT.string
}

export default ImageViewer;
