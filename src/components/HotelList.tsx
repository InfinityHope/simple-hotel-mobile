import { ActivityIndicator, FlatList } from 'react-native';
import { useAppSelector } from '../hooks/useAppSelector';
import { HotelCard } from './HotelCard';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchHotels } from '../redux/sagas/hotel-saga/hotel-saga.actions';

export const HotelList = () => {
  const { hotels, isLoading } = useAppSelector((state) => state.hotels);
  const searchParams = useAppSelector((state) => state.searchParams);
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
