import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class HomePage extends React.Component{
  render(){
    return (
      <div>
        <div className="landing-screen">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                <div className="landing-text">
                  <h2>EXPLORE NASA APIs</h2>
                  <p className="">APOD. EPIC. EARTH. & MUCH MORE...</p>
                  <button type="button" className="btn  btn-primary">Know More</button>
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
                  <button type="button" className="btn btn-primary ">Explore Now</button>
                </div>
              </div>

              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                <div className="features-text">
                  <h3> Earth Polychromatic Imaging Camera (EPIC) </h3>
                  <p className="">takes images of the sunlit side of Earth for various Earth sciences purposes, in 10 different channels from ultraviolet to near infrared. Ozone and aerosol levels will be monitored, as well as cloud dynamics, properties of the land and vegetations. </p>
                  <Link to="/epic" className="btn btn-primary ">Explore Now</Link>
                </div>
              </div>

              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                <div className="features-text">
                  <h3>Earth</h3>
                  <p className="">A recent industry report estimates that total annual value of $2.19 billion, far exceeding the multi-year total cost of building, launching, and managing Landsat satellites and sensors. The value is derived from consumer use of the data.</p>
                  <button type="button" className="btn btn-primary ">Explore Now</button>
                </div>
              </div>

              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                <div className="features-text">
                  <h3>MUCH MORE</h3>
                  <p className="">coming soon.</p>
                  <button type="button" className="btn btn-primary " disabled="true">Explore Now</button>
                </div>
              </div>

            </div>
          </div>
        </div>
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
