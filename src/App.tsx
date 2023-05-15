/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './navigation/MainNavigation';
import { useAppSelector } from './hooks/useAppSelector';
import { AuthScreen } from './screens';

function App(): JSX.Element {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        isAuth ? <MainNavigator /> : <AuthScreen />
      }
    </SafeAreaView>
  );
}

export default App;
