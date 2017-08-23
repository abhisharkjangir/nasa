import React from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return <span>Loading Please wait!</span>;
  }
}

export default LoadingDots;
