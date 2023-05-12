/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainNavigator from './navigation/navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
