import React from 'react';
import PropTypes from "prop-types";

import { Field, reduxForm } from 'redux-form';
import InputField from '../common/InputFormField';
import ButtonField from '../common/ButtonField';

import { LoanSchemeValidator } from '../../validation/validator/LoanSchemeValidator';
import SelectField from '../common/SelectField';
import formNames from '../../constants/formNames';
import dropDown from '../../constants/dropDown';

const LoanSchemeComponent = (props) => {
    const { handleSubmit } = props;
        return (
            <form onSubmit={handleSubmit} className="d-flex justify-content-center">
            <div className="col-md-6 border m-4 p-4 card bg-light border-light">
            <h2>Your loan scheme details</h2>
            <p>Please provide your details to purchase car with finance scheme
            </p>
                <Field
                name="price"
                type="text"
                component={InputField}
                label="Car price"
                />
                <Field 
                    name="deposit" 
                    type="text" 
                    component={InputField} 
                    label="Deposit (Min 15% of car price)" />
                <Field 
                    name="delivery_date" 
                    type="date" 
                    component={InputField} 
                    label="Delivery Date" />
                <Field 
                    name="forYears" 
                    component={SelectField} 
                    options={dropDown.YEAR_OF_FINANCE}
                    label="Finance Years" />
                <div>
                <Field 
                    name="button" 
                    type="submit" 
                    component={ButtonField} 
                    label="Continue" />
                </div>
            </div>
            </form>
        );
}

LoanSchemeComponent.propTypes = {
    handleSubmit: PropTypes.func,
};

export default reduxForm({
    form: formNames.LOAN_SCHEME_FORM,
    destroyOnUnmount: false,
    validate: LoanSchemeValidator,
  })(LoanSchemeComponent);