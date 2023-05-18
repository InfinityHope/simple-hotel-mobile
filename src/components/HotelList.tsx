import {
  ActivityIndicator, FlatList, View, Text
} from 'react-native';
import { FC } from 'react';

import { HotelCard } from './HotelCard';
import { IHotel } from '../interfaces/Hotel.interface';

interface IHotelList {
  isLoading?: boolean
  hotels: IHotel[]
  handleOnRefresh?: () => void
}

export const HotelList: FC<IHotelList> = ({ isLoading, hotels, handleOnRefresh }) => {
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ paddingHorizontal: 16, flex: 1 }}>
      {hotels.length ? (
        <FlatList
          keyExtractor={(item) => item.hotelId.toString()}
          data={hotels}
          onRefresh={handleOnRefresh}
          refreshing={isLoading || false}
          renderItem={({ item }) => <HotelCard {...item} />}
        />
      ) : <Text style={{ alignSelf: 'center' }}>Нет доступных отелей</Text>}

    </View>
  );
};
