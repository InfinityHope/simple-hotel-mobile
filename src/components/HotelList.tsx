import { ActivityIndicator, FlatList } from 'react-native';

import { HotelCard } from './HotelCard';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';
import { selectHotels, selectIsLoading } from '../redux/reducers/hotel-reducer/Hotel.selector';
import { selectSearchParams } from '../redux/reducers/search-params-reducer/SearchParams.selector';

export const HotelList = (): JSX.Element => {
  const hotels = useAppSelector(selectHotels);
  const isLoading = useAppSelector(selectIsLoading);
  const searchParams = useAppSelector(selectSearchParams);
  const dispatch = useAppDispatch();

  const getHotels = () => dispatch(fetchHotels(searchParams));

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      scrollEnabled
      keyExtractor={(item) => item.hotelId.toString()}
      data={hotels}
      onRefresh={getHotels}
      refreshing={isLoading}
      renderItem={({ item }) => <HotelCard {...item} />}
    />
  );
};
