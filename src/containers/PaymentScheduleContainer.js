import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PaymentScheduleComponent from '../components/PaymentSchedule';
import { navigateToNextPage, goBack } from '../utils/navigationUtils';
import formNames from '../constants/formNames';
import { formValueSelector } from 'redux-form';

class PaymentScheduleContainer extends Component {

    render() {
        const { history, yearOfFinance, price, deliveryDate } = this.props;
        return <PaymentScheduleComponent 
        price={price}
        deliveryDate={deliveryDate}
        yearOfFinance={yearOfFinance} 
        onBack = {() => {
            goBack({history})
        }}
        onContinue={() => {
            navigateToNextPage({history})
        }}/>
    }
}

const mapStateToProps = state => {
    const selector = formValueSelector(formNames.LOAN_SCHEME_FORM)
    return {
        yearOfFinance: selector(state, 'forYears'),
        price: selector(state, 'price'),
        deliveryDate: selector(state, 'delivery_date'),
    }
};

PaymentScheduleContainer.propTypes = {
    history: PropTypes.object,
    yearOfFinance: PropTypes.string,
    price: PropTypes.string,
    deliveryDate: PropTypes.string,
};

export default connect(mapStateToProps, null)(PaymentScheduleContainer);