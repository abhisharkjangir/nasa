import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import MobileMenu from './MobileMenu';

class Header extends Component {
  constructor (){
    super()
    this.state = {mobileMenu : false};
    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  openMobileMenu(){
    this.setState({mobileMenu : true});
  }

  closeMobileMenu(){
    this.setState({mobileMenu : false});
  }

  render(){
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" onClick={this.openMobileMenu}>
                <i className="glyphicon glyphicon-option-vertical" />
              </button>
              <IndexLink to="/" className="navbar-brand" >Nasa-Explorer</IndexLink>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className=""><IndexLink to="/" className="nav-link">Home</IndexLink></li>
                <li className=""><Link to="/apod" className="nav-link" >Apod</Link></li>
                <li className=""><Link to="/epic" className="nav-link" >Epic</Link></li>
                <li className=""><Link to="/earth" className="nav-link" >Earth</Link></li>
                {/* <li className=""><Link to="/about" className="nav-link" >about</Link></li> */}
              </ul>
            </div>
          </div>
        </nav>
        {this.state.mobileMenu && <MobileMenu close={this.closeMobileMenu}/>}
      </div>
    );
  }
};


export default Header;
