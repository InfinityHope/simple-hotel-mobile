import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchForm } from '../components/SearchForm';
import { HotelList } from '../components/HotelList';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';
import { RootStackParamList } from '../navigation/MainNavigation';
import { useSearchParams } from '../redux/reducers/search-params-reducer/SearchParams.selector';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation } : HomeScreenProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    dispatch(fetchHotels(searchParams));
  }, []);

  return (
    <View style={styles.container}>
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
    paddingTop: 29
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
