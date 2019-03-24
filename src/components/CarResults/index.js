import React, { Component } from 'react';
import PropTypes from "prop-types";
import ButtonField from '../CommonComponents/ButtonField';
import AppLoader from '../CommonComponents/AppLoader';

class CarResultsComponent extends Component {

    render() {
        const { onBack, carResults, loading} =this.props;
        return (
           <div>{loading ? <AppLoader /> :
            <div className="d-flex justify-content-center">
                <div className="col-md-6 border m-4 p-4 card bg-light border-light">
                <h2>Car suggestions</h2>
                <p>
                    Car results based on your budget
                </p>
                <div className="row">{carResults && carResults.length> 0 ? carResults.map( (result, index) => 
                <div className="col-md-6 my-2" key={`results_${index}`}>
                    <div className="card p-3">
                        <h5 className="card-title">{result.model}</h5>
                        <span className="text-muted fs-12">Price: £ {result.price}</span>
                        <span className="text-muted fs-12"> Deposit: £ {result.deposit}</span>
                        <span className="text-muted fs-12">Monthly Payment: £ {result.monthlyPayment}</span>
                    </div>
                </div>) : <h5 className="col-md-12 my-2 text-muted">
                Sorry! No cars available to your budget please try increasing your price.</h5>}
                </div>
                
                <div className="row p-1">
                    <ButtonField onClick={onBack} label="Back"/>
                </div>
                </div>
            </div>}</div>
        );
    }
}

CarResultsComponent.propTypes = {
    onBack: PropTypes.func,
    carResults: PropTypes.array,
    loading: PropTypes.bool,
};

export default CarResultsComponent;