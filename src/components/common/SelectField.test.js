import React from 'react';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectField from './SelectField';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit testing for SelectField Component
 */
describe('SelectField should', () => {

      it('be created without crash', () => {
        const component = mount(<SelectField 
            options={[{label: 'Please select', value: ''}]} 
            meta={{ touched: true, error: ''}} />);
        expect(component.find(SelectField).length).toBe(1);
      });
});