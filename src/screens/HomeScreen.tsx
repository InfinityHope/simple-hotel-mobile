import { StyleSheet, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';

import { SearchForm } from '../components/SearchForm';
import { HotelList } from '../components/HotelList';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';
import { selectSearchParams } from '../redux/reducers/search-params-reducer/SearchParams.selector';
import { RootStackParamList } from '../navigation/MainNavigation';
import { selectHotels, selectIsLoading } from '../redux/reducers/hotel-reducer/Hotel.selector';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation } : HomeScreenProps) => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(selectSearchParams);
  const hotels = useAppSelector(selectHotels);
  const isLoading = useAppSelector(selectIsLoading);

  const handleGetHotelsRefresh = () => {
    dispatch(fetchHotels(searchParams));
  };

  useEffect(() => {
    handleGetHotelsRefresh();
  }, []);

  const navigateToResults = () => navigation.navigate('Results');

  return (
    <View style={styles.container}>
      <SearchForm navigateToResults={navigateToResults} />

      <Text style={styles.homeText}>Подходящие бронирования</Text>

      <HotelList
        hotels={hotels}
        isLoading={isLoading}
        handleOnRefresh={handleGetHotelsRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    backgroundColor: '#F4F4F4',
    paddingTop: 24
  },
  homeText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    paddingHorizontal: 16,
    alignItems: 'center',
    color: '#000000',
  }
});

export default HomeScreen;
