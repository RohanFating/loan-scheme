import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
} from 'react-router-dom';

import store from './infrastructure/store';

it('rendimport store from', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
