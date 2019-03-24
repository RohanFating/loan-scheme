import React from 'react';
import Enzyme,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppHeader from './appHeader';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit testing for AppHeader Component
 */
describe('AppHeader should', () => {

      it('be created without crash', () => {
        const component = mount(<AppHeader />);
        expect(component.find(AppHeader).length).toBe(1);
      });
});