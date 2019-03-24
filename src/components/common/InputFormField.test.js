import React from 'react';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputFormField from './InputFormField';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit testing for InputFormField Component
 */
describe('InputFormField should', () => {

      it('be created without crash', () => {
        const component = mount(<InputFormField meta={{ touched: true, error: ''}} />);
        expect(component.find(InputFormField).length).toBe(1);
      });
});