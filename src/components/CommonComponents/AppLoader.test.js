import React from 'react';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppLoader from './appLoader';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit testing for AppLoader Component
 */
describe('AppLoader should', () => {

      it('be created without crash', () => {
        const component = mount(<AppLoader />);
        expect(component.find(AppLoader).length).toBe(1);
      });
});