import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './app/rematch';

import Home from './app/index';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
