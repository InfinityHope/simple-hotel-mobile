/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './navigation/MainNavigation';
import { AuthScreen } from './screens';
import { useIsAuth } from './redux/reducers/auth-reducer/Auth.selector';

function App(): JSX.Element {
  const isAuth = useIsAuth();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        isAuth ? <MainNavigator /> : <AuthScreen />
      }
    </SafeAreaView>
  );
}

export default App;
