import React from "react";
import PropTypes from "prop-types";

const InputFormField = ({
    input,
    label,
    type,
    description,
    meta: { touched, error }
  }) => (
    <div>
      <div className="form-group">
      <label><b>{label}</b></label>
        <input className="form-control" {...input} placeholder={label} type={type} />
        {touched && error && <span className="text-danger">{error}</span>}
      </div>
    </div>
);

InputFormField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    options: PropTypes.shape([{
        label: PropTypes.string,
        value: PropTypes.string,
    }]),
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }),
};

export default InputFormField;