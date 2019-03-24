import React, { Component } from 'react';
import AppRouting from './routes';
import AppHeader from './components/common/AppHeader';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
        <AppRouting />
      </div>
    );
  }
}

export default App;
