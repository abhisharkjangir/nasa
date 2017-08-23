import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ApodActions from '../../actions/ApodActions';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'

class ApodPage extends React.Component {
  constructor(props, context) {
    super();
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchApod(this.props.apod.date);
  }

  handleDateChange(e,date){
    this.props.actions.updateDate(date);
    this.props.actions.fetchApod(date);
  }

  render() {
    return (
      <div className="page-container">
        <div className="container-fluid">
          <div className="row">
            {this.props.apod.data && <div className="apod">
              <div className="col-md-5">
                <div className="apod-details">
                  <h1>APOD Astronomy Picture of The Day</h1>
                  <DatePicker
                    hintText="Portrait Dialog" value={this.props.apod.date}
                    onChange={this.handleDateChange} />
                  <h3>{this.props.apod.data.title}</h3>
                <h4>Date : {this.props.apod.data.date}</h4>
                  <p>{this.props.apod.data.explanation}</p>
                  {this.props.apod.data.copyright && <p>Copyright : {this.props.apod.data.copyright}</p>}
                </div>
              </div>
              <div className="col-md-7 p-0">
                {this.props.apod.data.media_type == "image" && <div className="apod-img-container">
                  <img src={this.props.apod.data.url} className="img-responsive apod-img"/>
                </div>}
                {this.props.apod.data.media_type == 'video' && <div className="apod-img-container">
                  <ReactPlayer className="player-frame" url={this.props.apod.data.url} controls />
                </div>}
              </div>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

ApodPage.propTypes = {
  apod : PropTypes.object.isRequired,
  actions : PropTypes.object
};

const mapStateToProps = (state,ownProps) => ({apod : state.apod});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(ApodActions,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(ApodPage);
