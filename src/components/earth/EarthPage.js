import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EarthActions from '../../actions/EarthActions';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import toastr from 'toastr';
import Moment from 'moment';

const mapStateToProps = (state, ownProps) => ({ earth: state.earth });

const showLocationError = (error) => {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      toastr.error("User denied the request for Geolocation. We're setting Sample geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      toastr.error("Location information is unavailable.  We're setting Sample geolocation.");
      break;
    case error.TIMEOUT:
      toastr.error("The request to get user location timed out.  We're setting Sample geolocation.");
      break;
    case error.UNKNOWN_ERROR:
      toastr.error("An unknown error occurred.  We're setting Sample geolocation.");
      break;
  }
}

const toggleStyle = {
  marginTop: '35px'
}

class EarthPage extends Component {
  constructor(props, context) {
    super();
    this.updateEarthFilters = this.updateEarthFilters.bind(this);
    this.searchEarthData = this.searchEarthData.bind(this);
  }

  componentDidMount() {
    if(!this.props.earth.filters.lat) {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.props.updateEarthFilters({ lat: position.coords.latitude, long: position.coords.longitude, date: new Date(), cloud: true })
        }, (err) => {
          showLocationError(err);
          this.props.updateEarthFilters({
            lat: 28.448552,
            long: 77.072434,
            date: new Date(),
            cloud: true
          });
        });
      } else {
        toastr.error("Geolocation is not supported by this browser.  We're setting Sample geolocation.");
        this.props.updateEarthFilters({
          lat: 28.448552,
          long: 77.072434,
          date: new Date(),
          cloud: true
        })
      }
    }
  }

  componentWillUnmount() {
    // this.props.clearEarthData();
  }

  updateEarthFilters(e, newValue) {
    const filter = {};
    if(e) {
      let field = e.target.name;
      filter[field] = newValue;
    } else {
      filter['date'] = newValue
    }
    this.props.updateEarthFilters(Object.assign({}, this.props.earth.filters, filter))
  }

  searchEarthData() {
    this.props.actions.storeEarthData(this.props.earth.filters)
  }

  render() {
    return(
      <div className="page-container earth">
        <div className=" earth-filter">
          <div className="container-fluid ">
            <div className='row'>
              <div className=" earth-page">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <TextField name="lat" hintText="Enter Latitute" floatingLabelText="Latitude" fullWidth={true} value={this.props.earth.filters.lat} onChange={this.updateEarthFilters}/>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <TextField name="long" hintText="Enter Longitude" floatingLabelText="Longitude" fullWidth={true} value={this.props.earth.filters.long} onChange={this.updateEarthFilters}/>
                    </div>
                    <div className="col-md-2 col-sm-6">
                      <DatePicker name="date" textFieldStyle={{'width': '100%'}} value={this.props.earth.filters.date} floatingLabelText="Date" onChange={this.updateEarthFilters} autoOk={true}/>
                    </div>
                    <div className="col-md-2 col-sm-6">
                      <Toggle name="cloud" style={toggleStyle} toggled={this.props.earth.filters.cloud} label="Cloud" onToggle={this.updateEarthFilters}/>
                    </div>
                    <div className="col-md-2 col-sm-12">
                      <RaisedButton label='Search' style={{'marginTop': '27px', 'width' : '100%'}} onClick={this.searchEarthData} primary={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.earth.data &&
          <div className='earth-image'>
            <div className="row">
              <div className="col-md-12">
                <img src={this.props.earth.data.url} className="img-resposive" />
              </div>
            </div>
          </div>}
      </div>
    );
  }
}

EarthPage.propTypes = {
  earth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  clearEarthData: () => dispatch({ type: 'CLEAR_EARTH_DATA' }),
  updateEarthFilters: (filters) => dispatch({ type: 'UPDATE_EARTH_FILTERS', filters: filters }),
  actions: bindActionCreators(EarthActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EarthPage);
