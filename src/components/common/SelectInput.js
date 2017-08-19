import React,{PropTypes} from 'react';

const SelectInput = ({name,label,onChange,placeholder,value,error,options}) => {
  return(
    <div className = "form-group">
    <div className = "field">
    {<select
        name = {name}
        value = {value}
        onChange = {onChange}
        className = "form-control">
        {options.map((option)=>{
          return <option key = {option.value} value = {option.value}> {option.name}</option>;
        })
        }
      </select>}
      {error && <div className = "alert alert-danger">{error}</div>}

    </div>
    </div>

  );
};

SelectInput.propTypes = {
  name :PropTypes.string.isRequired,
  label :PropTypes.string.isRequired,
  onChange :PropTypes.func.isRequired,
  placeholder:PropTypes.string,
  value:PropTypes.string,
  error:PropTypes.object,
  options:PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
