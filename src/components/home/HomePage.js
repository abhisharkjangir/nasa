import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'moment';

class HomePage extends React.Component{
  render(){
    let backgroundImage = {};
    this.props.apod.home && this.props.apod.home.media_type === 'image'
    ? backgroundImage.backgroundImage = `url(${this.props.apod.home.hdurl})`
    : backgroundImage.backgroundImage = `url('https://apod.nasa.gov/apod/image/1708/2016_08_06_Perseids_1310pxHoralek.jpg')`
    return (
      <div>
        {this.props.apod.home && <div className='wrapper'>
          <div className="landing-screen" style={backgroundImage}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                  <div className="landing-text">
                    <h2>Astronomy Picture of {Moment(this.props.apod.home.date).format('Do MMM YYYY')}</h2>
                    <h3> is "{this.props.apod.home.title}".</h3>
                    <p>Find more such pictures.</p>
                    <h4>"Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer." <p className="text-right"><b>-Nasa Website</b></p></h4>
                    <Link to='/apod'><RaisedButton label='Explore More' primary={true} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features-screen">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                  <div className="features-text">
                    <h3>Astronomy Picture of the Day(APOD)</h3>
                    <p className="">is a website provided by NASA and Michigan Technological University (MTU). According to the website, "Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer." </p>
                    <Link to='/apod'><RaisedButton label='Explore APODs' primary={true} /></Link>
                  </div>
                </div>

                <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                  <div className="features-text">
                    <h3> Earth Polychromatic Imaging Camera (EPIC) </h3>
                    <p className="">takes images of the sunlit side of Earth for various Earth sciences purposes, in 10 different channels from ultraviolet to near infrared. Ozone and aerosol levels will be monitored, as well as cloud dynamics, properties of the land and vegetations. </p>
                    <Link to='/epic'><RaisedButton label='Explore EPICs' primary={true} /></Link>
                  </div>
                </div>

                <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                  <div className="features-text">
                    <h3>Earth</h3>
                    <p className="">A recent industry report estimates that total annual value of $2.19 billion, far exceeding the multi-year total cost of building, launching, and managing Landsat satellites and sensors. The value is derived from consumer use of the data.</p>
                    <Link to='/earth'><RaisedButton label='Explore Earth' primary={true} /></Link>
                  </div>
                </div>

                {/* <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                  <div className="features-text">
                    <h3>MUCH MORE</h3>
                    <p className="">coming soon.</p>
                    <Link to='/epic'><RaisedButton label='Explore EPICs' primary={true} /></Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return {
    apod : state.apod
  }
}

export default connect(mapStateToProps)(HomePage);
