import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import { NavigatorContainer } from './src/navigator/NavigatorContainer';

export default function App() {

  return (
    <Provider store={store} >
      <NavigatorContainer/>
    </Provider>
  );
}

