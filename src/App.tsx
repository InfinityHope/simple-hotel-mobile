/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './navigation/MainNavigation';

import { AuthScreen } from './screens';

import { useAppSelector } from './hooks/useAppSelector';

import { selectIsAuth } from './redux/reducers/auth-reducer/Auth.selector';

function App(): JSX.Element {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        isAuth ? <MainNavigator /> : <AuthScreen />
      }
    </SafeAreaView>
  );
}

export default App;
