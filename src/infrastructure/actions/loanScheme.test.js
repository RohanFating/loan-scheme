
import fetchMock from 'fetch-mock';
import { DUMMY_CAR_RESULTS } from '../reducers/loanScheme.test';
import appConfig from '../../constants/appConfig';
import store from '../../infrastructure/store'
import { getCarDetails } from './loanScheme';

/**
 * Unit testing for Loan Scheme Actions
 */
describe('Loan Scheme Actions should', () => {

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    })

    it('get car results', () => {
        fetchMock.getOnce(appConfig.PROXY +  appConfig.API_URL, JSON.stringify(DUMMY_CAR_RESULTS))
        store.dispatch(getCarDetails());
        const storeSubscription = store.subscribe(() => {
            const state = store.getState();
            expect(state.loanScheme.loanScheme.length).toBeGreaterThan(0);
            storeSubscription();
        });
    })

});