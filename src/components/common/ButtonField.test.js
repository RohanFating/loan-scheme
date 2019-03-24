import React from 'react';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonField from './ButtonField';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit testing for ButtonField Component
 */
describe('ButtonField should', () => {

      it('be created without crash', () => {
        const component = mount(<ButtonField />);
        expect(component.find(ButtonField).length).toBe(1);
      });
});