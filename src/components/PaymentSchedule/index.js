import React, { Component } from 'react';
import PropTypes from "prop-types";
import PaymentScheduleTable from './PaymentScheduleTable';
import ButtonField from '../CommonComponents/ButtonField';
import { getPaymentSchedule } from '../../utils/paymentScheduleUtil';

class PaymentScheduleComponent extends Component {

    render() {
        const { onContinue, onBack, yearOfFinance, price, deliveryDate } =this.props;
        const fYears = parseInt(yearOfFinance);
        return (
            <div className="d-flex justify-content-center">
                <div className="col-md-6 border m-4 p-4 card bg-light border-light">
                <h2>Your payment schedule</h2>
                <p>
                    Your payment is devided into {12*fYears} month and you have to pay on first monday of each month.
                    There is a minimum 15% deposit which you need to pay now with the application.
                </p>
                <p>
                    You have to pay  £88 arrangement fee For the first month, the last a £20 completion fee. 
                    Please see your first and last payment due.
                </p>
                <PaymentScheduleTable 
                    paymentDue={parseInt(price)/(12*fYears)} 
                    paymentSchedules={getPaymentSchedule(fYears, deliveryDate)}/>
                <div className="row p-1">
                    <ButtonField onClick={onBack} label="Back"/>
                    <ButtonField onClick={onContinue} label="Continue"/>
                </div>
                </div>
            </div>
        );
    }
}

PaymentScheduleComponent.propTypes = {
    onContinue: PropTypes.func,
    onBack: PropTypes.func,
    yearOfFinance: PropTypes.string,
    price: PropTypes.string,
    deliveryDate: PropTypes.string,
};

export default PaymentScheduleComponent;