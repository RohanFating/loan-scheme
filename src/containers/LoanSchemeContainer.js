import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoanSchemeComponent from '../components/LoanScheme';
import { navigateToNextPage } from '../utils/navigationUtils';

class LoanSchemeContainer extends Component {

    render() {
        const { history } = this.props;
        return <LoanSchemeComponent onSubmit={() => {
            navigateToNextPage({history})
        }}/>
    }
}

const mapStateToProps = state => ({
    state,
});

LoanSchemeContainer.propTypes = {
    history: PropTypes.object,
};
export default connect(mapStateToProps, null)(LoanSchemeContainer);