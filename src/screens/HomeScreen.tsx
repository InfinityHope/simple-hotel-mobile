import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';
import { HotelList } from '../components/HotelList';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';
import { RootStackParamList } from '../navigation/MainNavigation';
import { logOut } from '../redux/reducers/Auth.slice';
import { removeData } from '../helpers/asyncStorage';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation } : HomeScreenProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector((state) => state.searchParams);
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigation.navigate('Auth');
    }
  }, [isAuth]);

  useEffect(() => {
    dispatch(fetchHotels(searchParams));
  }, []);

  const logoutHandler = () => {
    dispatch(logOut);
    removeData('authData');
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Header logoutHandler={logoutHandler} />
      <SearchForm />
      <Text style={styles.homeText}>Подходящие бронирования</Text>
      <HotelList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 16,
    paddingTop: 69
  },
  homeText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    alignItems: 'center',
    color: '#000000',
  }
});

export default HomeScreen;
