import React from "react";
import PropTypes from "prop-types";
import { getPaymentDue } from "../../utils/paymentScheduleUtil";

const PaymentScheduleTable = (props) => {
    const { paymentSchedules, paymentDue } = props;
    return <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Payment Due Date</th>
            <th scope="col" className="text-center">Payment Amount</th>
            </tr>
        </thead>
        <tbody>
        {paymentSchedules.map(( paymentSchedule, index) => <tr key={`payment_${index}`}>
            <th scope="row">{index+1}</th>
            <td>{paymentSchedule}</td>
            <td className="text-center">£ {getPaymentDue(paymentDue, index, paymentSchedules) }</td>
        </tr>)}
        </tbody>
    </table>;
};

PaymentScheduleTable.propTypes = {
    paymentSchedules: PropTypes.array,
    paymentDue: PropTypes.string,
};

export default PaymentScheduleTable;