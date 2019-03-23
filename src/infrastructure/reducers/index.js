import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import loanScheme from './loanScheme';
import loader from './loader';

const rootReducer = combineReducers({
  loanScheme,
  loader,
  form: reduxFormReducer,
});

export default rootReducer;