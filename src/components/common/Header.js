import React,{PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container p-0">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand" >NasaExplorer</IndexLink>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><IndexLink to="/" className="nav-link">Home</IndexLink></li>
              <li className=""><Link to="/apod" className="nav-link" >Apod</Link></li>
              <li className=""><Link to="/epic" className="nav-link" >Epic</Link></li>
              <li className=""><Link to="/earth" className="nav-link" >Earth</Link></li>
              <li className=""><Link to="/about" className="nav-link" >about</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  loading : PropTypes.bool.isRequired
};

export default Header;
