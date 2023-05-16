import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Pressable, StyleSheet, Text, View
} from 'react-native';

import { HomeScreen } from '../screens';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { logOut } from '../redux/reducers/auth-reducer/Auth.slice';
import { removeDataFromStorage } from '../redux/sagas/auth-saga/auth-saga.action';

import LogOut from '../assets/logOut.svg';

export type RootStackParamList = {
  Home: undefined,
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
            headerLeft: () => (
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Simple Hotel Check</Text>
              </View>
            ),
            headerRight: () => (
              <Pressable onPress={logoutHandler} style={styles.header}>
                <LogOut />
              </Pressable>
            ),
            title: ''
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29
  }
});

export default MainNavigator;
