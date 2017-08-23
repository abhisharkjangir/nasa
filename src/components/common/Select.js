import React from 'react';
import PropTypes from 'prop-types';

const SelectDropdown = ({name,label,onChange,placeholder,value,options}) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <select className = "form-control selectdropdown" value={value} placeholder={placeholder} onChange={onChange} name={name}>
        {options && options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
      </select>
    </div>
  );
}

SelectDropdown.propTypes = {
  name :PropTypes.string.isRequired,
  onChange :PropTypes.func.isRequired,
  placeholder:PropTypes.string,
  value:PropTypes.string,
  label : PropTypes.string,
  options:PropTypes.arrayOf(PropTypes.object)
};

export default SelectDropdown;
