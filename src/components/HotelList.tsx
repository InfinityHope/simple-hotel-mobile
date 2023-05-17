import { ActivityIndicator, FlatList, View } from 'react-native';

import { FC } from 'react';
import { Text } from 'react-native-svg';
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
    <View style={{ paddingHorizontal: 16 }}>
      {hotels ? (
        <FlatList
          keyExtractor={(item) => item.hotelId.toString()}
          data={hotels}
          onRefresh={handleOnRefresh}
          refreshing={isLoading || false}
          renderItem={({ item }) => <HotelCard {...item} />}
        />
      ) : <Text>Нет доступных отелей</Text>}

    </View>
  );
};
