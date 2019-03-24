import actionTypes from "../../constants/actionTypes";
import { getCarResults } from "../../utils/paymentScheduleUtil";

const initialFormState = {}

/**
 * To handle state of loan scheme
 * @param state - state
 * @param action - action to perform state operation
 */
const loanScheme = ( state=initialFormState, action ) => {
    switch(action.type) {
        case actionTypes.GET_CAR_DETAILS_SUCCESS: 
        return {
            ...state,
            carResults: getCarResults(action.payload.results ? 
                action.payload.results.searchResults : [], action.payload.price),
        }
        default : return state;
    }
};

export default loanScheme;