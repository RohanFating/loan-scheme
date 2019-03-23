import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCarDetails } from '../infrastructure/actions/loanScheme';
import CarResultsComponent from '../components/CarResults'
import { goBack } from '../utils/navigationUtils';
class CarResultsContainer extends Component {

    componentDidMount(){
       this.props.dispatch(getCarDetails());
    }

    render() {
        const { history, carResults, loading } = this.props;
        return <CarResultsComponent carResults={carResults} loading={loading}
        onBack = {() => {
            goBack({history})
        }}>CarResultsContainer</CarResultsComponent>
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loader.loading,
        carResults: state.loanScheme && state.loanScheme.carResults ? state.loanScheme.carResults : [],
    }
};

const mapDispatchToProps = dispatch => ({
    dispatch,
});

CarResultsContainer.propTypes = {
    history: PropTypes.object,
    carResults: PropTypes.array,
    loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarResultsContainer);