import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './componud/Navbar';
import store from './componud/store';

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  }
}
