import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ApodActions from '../../actions/ApodActions';
import ReactPlayer from 'react-player';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ImageViewer from '../common/ImageViewer';

class ApodPage extends React.Component {
  constructor(props, context) {
    super();
    this.state = ({zoom: false});
    this.handleDateChange = this.handleDateChange.bind(this);
    this.zoomImage = this.zoomImage.bind(this);
    this.closeZoomImage = this.closeZoomImage.bind(this);
  }

  zoomImage(){
    this.setState({zoom : true});
  }

  closeZoomImage(){
    this.setState({zoom : false});
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
      <div className="page-container apod-page">
        <div className="container-fluid">
          <div className="row">
            {this.props.apod.data && <div className="apod">
              <div className="col-md-5">
                <div className="apod-details">
                  <label>Astronomy Picture of</label>
                  <DatePicker className='mui-datepicker'
                    hintText="Portrait Dialog"
                    value={this.props.apod.date}
                    onChange={this.handleDateChange}
                    autoOk={true}/>
                  <h3>"{this.props.apod.data.title}"</h3>
                  <h4>Date : {this.props.apod.data.date}</h4>
                  <h4>{this.props.apod.data.explanation}</h4>
                  {this.props.apod.data.copyright && <p>Copyright : {this.props.apod.data.copyright}</p>}
                  {this.props.apod.data.media_type == "image" &&
                    <a download="Image" href={this.props.apod.data.hdurl} className="btn btn-white">
                      <span className="glyphicon glyphicon-cloud-download"/> Download HD Image
                    </a>
                  }
                  {this.props.apod.data.media_type == "image" &&
                    <a className="btn btn-white" onClick={this.zoomImage}>
                      <span className="glyphicon glyphicon-fullscreen"/> Zoom Image
                    </a>
                  }
                  {this.state.zoom &&
                    <ImageViewer
                      className='animated slideInRight'
                      imgurl={this.props.apod.data.url}
                      imgclose={this.closeZoomImage}
                      imgtitle={this.props.apod.data.title}
                    />
                  }
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
