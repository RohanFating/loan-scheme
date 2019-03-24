import React from "react";
import PropTypes from "prop-types";

const ButtonField = ({
    input,
    label,
    type,
    disabled,
    onClick,
  }) => (
    <div>
      <div className="form-group">
        <button onClick={onClick} className="btn btn-primary m-2" type={type} disabled={disabled}>
           {label}
        </button>
      </div>
    </div>
);

ButtonField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.shape([{
      label: PropTypes.string,
      value: PropTypes.string,
  }]),
};
    

export default ButtonField;