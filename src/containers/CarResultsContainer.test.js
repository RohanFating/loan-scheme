import React from 'react';
import store from '../infrastructure/store';
import { Provider } from 'react-redux';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarResultsContainer from './CarResultsContainer';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit testing for CarResultsContainer Component
 */
describe('CarResultsContainer should', () => {

    it('be created without crash', () => {
    const component = mount(<Provider store={store}>
        < CarResultsContainer />
    </Provider>);
    expect(component.find(CarResultsContainer).length).toBe(1);
    });   
});