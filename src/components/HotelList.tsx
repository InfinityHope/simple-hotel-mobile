import { ActivityIndicator, FlatList } from 'react-native';
import { HotelCard } from './HotelCard';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';
import { useSearchParams } from '../redux/reducers/search-params-reducer/SearchParams.selector';
import { useHotels, useIsLoadingHotels } from '../redux/reducers/hotel-reducer/Hotel.selector';

export const HotelList = (): JSX.Element => {
  const hotels = useHotels();
  const isLoading = useIsLoadingHotels();
  const searchParams = useSearchParams();
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
