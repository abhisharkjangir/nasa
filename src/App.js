import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <Header/>
        <div className="row">
          <MuiThemeProvider>
            {this.props.children}
          </MuiThemeProvider>
        </div>
        <div className="row"><Footer/></div>
        {this.props.loading && <div className="loading-overlay">
          <div className="text">
            <MuiThemeProvider>
              <div>
                <CircularProgress color='white'/>
                <h3>Loading</h3>
              </div>
            </MuiThemeProvider>
          </div>
        </div>}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
