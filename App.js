import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import { NavigatorContainer } from './src/navigator/NavigatorContainer';
import { StatusBar } from 'react-native';


export default function App() {

  return (
    <Provider store={store} >
        <StatusBar
        animated={true}
        backgroundColor="#2B124C"
      />
      <NavigatorContainer/>
    </Provider>
  );
}

