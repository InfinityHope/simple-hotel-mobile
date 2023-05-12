/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { store } from './redux/store';
import MainNavigator from './navigation/MainNavigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
