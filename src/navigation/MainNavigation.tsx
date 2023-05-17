import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Pressable, StyleSheet, Text, View
} from 'react-native';

import React from 'react';
import { HomeScreen, ResultsScreen } from '../screens';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { logOut } from '../redux/reducers/auth-reducer/Auth.slice';
import { removeDataFromStorage } from '../redux/sagas/auth-saga/auth-saga.action';

import LogOut from '../assets/logOut.svg';
import SearchIcon from '../assets/search-normal.svg';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectSearchParams } from '../redux/reducers/search-params-reducer/SearchParams.selector';
import { convertLongDate } from '../helpers/date';
import { getFontStyles } from '../helpers/getFontStyles';

export type RootStackParamList = {
  Home: undefined,
  Results: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  const dispatch = useAppDispatch();

  const { checkIn, nights, location } = useAppSelector(selectSearchParams);

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
          options={{
            headerShown: false,
            headerBackground: () => (
              <View style={styles.headerResults}>

                <View style={styles.headerResultsInfo}>
                  <SearchIcon style={styles.searchIcon} />

                  <Text style={headerResultsInfoText}>{`${location}, ${convertLongDate(checkIn)}, ${nights} ночь`}</Text>
                </View>

              </View>
            )
          }}
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
  headerResults: {
    paddingTop: 51,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerResultsInfo: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderColor: '#5AC8FA',
    borderRadius: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 17
  },
});

const headerResultsInfoText = getFontStyles({ size: 14, lHeight: 20, color: '#424242' });

export default MainNavigator;
