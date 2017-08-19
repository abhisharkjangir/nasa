import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as CONST from '../../constants/constants';
import SelectDropdown from '../common/Select';
import {bindActionCreators} from 'redux';
import * as EpicActions from '../../actions/EpicActions';
import Moment from 'moment';

const mapStateToProps = (state,ownProps) => ({epic : state.epic});

class EpicPage extends React.Component {
  constructor(props,context) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.searchEpic = this.searchEpic.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchEpicDates(this.props.epic.filter.type);
  }

  handleChange(event) {
    const field = event.target.name;
    let filter = {};
    filter[field] = event.target.value;
    this.props.actions.updateFilters(filter);
  }

  searchEpic() {
    let payload = {type :this.props.epic.filter.type,date : this.props.epic.filter.date};
    this.props.actions.fetchEpic(payload);
  }

  getImageUrl(epic){
    return 'https://epic.gsfc.nasa.gov/archive/enhanced/2017/08/15/png/epic_RGB_20170815000830_02.png';
  }

  render(){
    return (
      <div className="page-container">
        <div className="container-fluid">
          <div className="">
            <div className="row epic-filter">
              <div className="col-md-4">
                <SelectDropdown name="type" label="Epic Type" value={this.props.epic.filter.type}
                  onChange={this.handleChange}
                  className="form-control" options={this.props.epic.types}
                  defaultoption="Select" placeholder="Select type"/>
              </div>
              <div className="col-md-4">
                <SelectDropdown name="date" label="Epic Date" value={this.props.epic.filter.date}
                  onChange={this.handleChange}
                  className="form-control" options={this.props.epic.dates}
                  placeholder="Select Date"/>
              </div>
              <div className="col-md-4">
                <label className="invisible">Search</label>
                <button className="btn btn-block" onClick={this.searchEpic}>Search</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="movie-listing">
                <div className="card-wrapper">
                  <div className="card-columns">
                    {this.props.epic.list && this.props.epic.list.map(epic =>
                      <div key={epic.date} className="pin">
                        <img src={epic.imgurl} className="img-responsive"/>
                        <div className="overlay">
                          <div className=" text">
                            <h3 className="text-capitalize">{epic.type} epic</h3><hr/>
                          <h4>{Moment(epic.date).format('Do MMM YYYY HH:MM:SS A')}</h4>
                            <p>{epic.caption}</p>
                          <button className="btn btn-white btn-block">Download Image</button>
                        <button className="btn btn-white btn-block">See on Map</button>
                          </div>
                        </div>
                        <div className="card-detail">
                          <h3 className="text-capitalize">{epic.type} epic</h3>
                          <p className="text-uppercase">Taken on</p>
                          <h4>{Moment(epic.date).format('Do MMM YYYY HH:MM:SS A')}</h4>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

EpicPage.propTypes = {
  epic : PropTypes.object.isRequired,
  actions : PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(EpicActions,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(EpicPage);
