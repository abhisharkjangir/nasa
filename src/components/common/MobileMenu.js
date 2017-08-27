import React, { Component } from 'react';
import PT from 'prop-types';
import {Link,IndexLink} from 'react-router';

class MonileMenu extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="mobile-menu">
        <div className='menu-close'><i onClick={this.props.close} className="glyphicon glyphicon-remove" /></div>
        <div className='menu-list'>
          <ul onClick={this.props.close}>
            <li><IndexLink to='/'>Home</IndexLink></li>
            <li><Link to='/apod'>Apod</Link></li>
            <li><Link to='/epic'>Epic</Link></li>
            <li><Link to='/earth'>Earth</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

MonileMenu.propTypes ={
  close : PT.func.isRequired
}

export default MonileMenu;
