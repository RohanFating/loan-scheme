import React from 'react';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarResultsComponent from './';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (mockCallBack) => {
    const component = mount(<CarResultsComponent onBack={mockCallBack}/>);
    return component;
}
/**
 * Unit testing for CarResultsComponent Component
 */
describe('CarResultsComponent should', () => {

      it('be created without crash', () => {
        const component = setUp(()=> {});
        expect(component.find(CarResultsComponent).length).toBe(1);
      });

      it('validate back button click', () => {
        const mockCallBack = jest.fn();
        const component = setUp(mockCallBack);
         component.find('button').simulate('click');
         expect(mockCallBack.mock.calls.length).toEqual(1);
      });
});