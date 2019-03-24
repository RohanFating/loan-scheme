import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    input,
    label,
    options,
    meta: { touched, error }
  }) => (
    <div>
      <div className="form-group">
      <label><b>{label}</b></label>
      <select  {...input} className="form-control" id="exampleFormControlSelect2">
       {options.map((option, index) => 
       <option value={option.value} key={`${option.label}_${index}`}>{option.label}</option>)}
        </select>
        {touched && error && <span className="text-danger">{error}</span>}
      </div>
    </div>
);

SelectField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    options: PropTypes.array,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }),
};

export default SelectField;