import React from 'react';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoanSchemeComponent from './';
import { Provider } from 'react-redux';
import store from '../..//infrastructure/store';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (mockCallBack) => {
    const component = mount(<Provider store={store}>
        <LoanSchemeComponent handleSubmit={mockCallBack}/>
    </Provider>);
    return component;
}
/**
 * Unit testing for LoanSchemeComponent Component
 */
describe('LoanSchemeComponent should', () => {

    it('be created without crash', () => {
    const component = setUp(()=> {});
    expect(component.find(LoanSchemeComponent).length).toBe(1);
    });
});