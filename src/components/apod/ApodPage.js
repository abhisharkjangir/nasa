import React,{PropTypes} from 'react';

class ApodPage extends React.Component {
  constructor(props,context) {
    super();
  }

  render(){
    return (
      <div className="page-container">
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-4">
              <h3>Search APOD By date</h3>
            </div>
            <div className="col-md-8">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApodPage;
