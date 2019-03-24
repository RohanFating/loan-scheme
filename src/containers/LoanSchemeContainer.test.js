import React from 'react';
import store from '../infrastructure/store';
import { Provider } from 'react-redux';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoanSchemeContainer from './LoanSchemeContainer';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit testing for App Component
 */
describe('LoanSchemeContainer should', () => {

    it('be created without crash', () => {
    const component = mount(<Provider store={store}>
        < LoanSchemeContainer />
    </Provider>);
    expect(component.find(LoanSchemeContainer).length).toBe(1);
    });
});