import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Pressable, StyleSheet, Text, View
} from 'react-native';

import { HomeScreen, ResultsScreen } from '../screens';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { logOut } from '../redux/reducers/auth-reducer/Auth.slice';
import { removeDataFromStorage } from '../redux/sagas/auth-saga/auth-saga.action';

import LogOut from '../assets/logOut.svg';

export type RootStackParamList = {
  Home: undefined,
  Results: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logOut());
    dispatch(removeDataFromStorage());
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: '#F4F4F4' },
            headerShadowVisible: false,
            headerLeft: () => (
              <View style={styles.headerHome}>
                <Text style={styles.headerHomeTitle}>Simple Hotel Check</Text>
              </View>
            ),
            headerRight: () => (
              <Pressable
                onPress={logoutHandler}
                style={styles.headerHome}
              >
                <LogOut />
              </Pressable>
            ),
            title: ''
          }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Results"
          component={ResultsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerHome: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerHomeTitle: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29
  },

});

export default MainNavigator;
