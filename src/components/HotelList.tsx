import { ActivityIndicator, Alert, FlatList } from 'react-native';

import { HotelCard } from './HotelCard';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';
import { selectError, selectHotels, selectIsLoading } from '../redux/reducers/hotel-reducer/Hotel.selector';
import { selectSearchParams } from '../redux/reducers/search-params-reducer/SearchParams.selector';

export const HotelList = () => {
  const hotels = useAppSelector(selectHotels);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const searchParams = useAppSelector(selectSearchParams);
  const dispatch = useAppDispatch();

  const getHotelsHandler = () => {
    dispatch(fetchHotels(searchParams));
  };

  if (error) {
    Alert.alert('Ошибка', 'произошла ошибка, повторите попытку');
  }

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      scrollEnabled
      keyExtractor={(item) => item.hotelId.toString()}
      data={hotels}
      onRefresh={getHotelsHandler}
      refreshing={isLoading}
      renderItem={({ item }) => <HotelCard {...item} />}
    />
  );
};
