import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';

class MuiDatepicker extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render(){
    return (
      <DatePicker
        floatingLabelText={this.props.label}
        hintText={this.props.hintText}
        value={this.props.value}
        onChange={this.handleChange}
        autoOk={true}
      />
    )
  }
}

export default MuiDatepicker;
