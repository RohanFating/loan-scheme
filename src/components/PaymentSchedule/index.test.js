import React from 'react';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PaymentScheduleComponent from './';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (mockCallBack) => {
    const component = mount(<PaymentScheduleComponent 
        onContinue={mockCallBack} onBack={mockCallBack}
        yearOfFinance="3" price="5000" deliveryDate="20/05/2019"/>);
    return component;
}
/**
 * Unit testing for PaymentScheduleComponent Component
 */
describe('PaymentScheduleComponent should', () => {

    it('be created without crash', () => {
    const component = setUp(()=> {}, ()=>{});
    expect(component.find(PaymentScheduleComponent).length).toBe(1);
    });

    it('validate continue button click', () => {
    const mockCallBack = jest.fn();
    const component = setUp(mockCallBack, mockCallBack);
    component.find('button').first().simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    it('validate continue button click', () => {
    const mockCallBack = jest.fn();
    const component = setUp(mockCallBack, mockCallBack);
    component.find('button').last().simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});