import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import { apiMiddleware } from 'redux-api-middleware';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(apiMiddleware)));
export default store;