import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EarthActions from '../../actions/EarthActions';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import toastr from 'toastr';
import Moment from 'moment';

const mapStateToProps = (state, ownProps) => ({earth: state.earth});

const showLocationError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      toastr.error("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      toastr.error("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      toastr.error("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      toastr.error("An unknown error occurred.");
      break;
  }
}

const toggleStyle = {
  marginTop: '35px'
}

class EarthPage extends Component {
  constructor(props, context) {
    super();
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.saveLatLong({lat : position.coords.latitude,long : position.coords.longitude})
      }, showLocationError);
    } else {
      toastr.error("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return (
      <div className="page-container earth">
        <div className="container">
          <div className="row">
            <div className='earth-page'>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <TextField hintText="Enter Latitute" floatingLabelText="Latitude" fullWidth={true} value={this.props.earth.lat}/>
                  </div>
                  <div className="col-md-3">
                    <TextField hintText="Enter Longitude" floatingLabelText="Longitude" fullWidth={true} value={this.props.earth.long}/>
                  </div>
                  <div className="col-md-3">
                    <DatePicker hintText="Portrait Dialog" value={this.props.earth.date} floatingLabelText="Ranged Date Picker"/>
                  </div>
                  <div className="col-md-3">
                    <Toggle style={toggleStyle} toggled={this.props.earth.cloud} label="Cloud Store"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EarthPage.propTypes = {
  earth: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  saveLatLong : (coordinates) => dispatch({type : 'SAVE_LAT_LONG', coordinates : coordinates})
});

export default connect(mapStateToProps, mapDispatchToProps)(EarthPage);
